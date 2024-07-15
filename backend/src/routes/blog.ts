import { PrismaClient } from '@prisma/client/edge'
import { Hono } from 'hono'
import {withAccelerate} from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from '@mukul96/medium-common'

export const blogRouter=new Hono<{
    Bindings:{
      DATABASE_URL:string;
      JWT_SECRET:string;
    },
    Variables:{
        userId:string
    }
  
  }>() ;
  blogRouter.use("/*", async (c, next) => {
    const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
	const payload:any = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
    c.status(200);
	c.set('userId', payload.id); 
	await next();
});


blogRouter.post('/', async(c) => {
    const body=await c.req.json();
    const authorId=c.get("userId");
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const response=createBlogInput.safeParse(body);
    if(!response.success)
    {
      c.status(411);
      return c.json({mssg:"wrong inputs"});
    }
    try{
        const blog=await prisma.blog.create({
            data:
                    {
                        title:body.title,
                        content:body.content,
                        date:body.date,
                        authorId:Number(authorId),
                    }        
        })
        return c.json({
            id:blog.id
        })
    }
    catch(e)
    { 
      c.status(411);  
       return c.text("something went wrong")} 
 })
  blogRouter.put('/', async(c) => {
    const body=await c.req.json();
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const response=updateBlogInput.safeParse(body);
      if(!response.success)
      {
        c.status(411);
        return c.json({mssg:"wrong inputs"});
      }
      try{
        const blog=await prisma.blog.update({
            where:{
                id:body.id
            },
            data:{
                title:body.title,
                content:body.content
            }
        })
        return c.json({id:blog.id})
      }
      catch(e)
{  console.log(e);
    return c.text('INVALID')
}  })
blogRouter.get('/bulk', async(c) => {
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      try{
        const blogs=await prisma.blog.findMany({
          select:{
            content:true,
            title:true,
            id:true,
            date:true,
            author:{
              select:{name:true}
            }
          }
        });
        
        
            return c.json({blogs});
      }
    catch(e)
    {
        return c.json({msg:"no blogs"});
    }
  })

  blogRouter.get('/:id', async(c) => {
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      try{
        const blog=await prisma.blog.findFirst({
            where:{
                id:Number(c.req.param("id"))
            },
            select:{
              id:true,
              content:true,
              title:true,
              date:true,
              author:{
                select:{name:true}
              }
            }
        })
        if(!blog)
        {
            c.status(411);
            c.json({msg:"no blog exist"});
        }
        return c.json({blog});
      }catch(e)
{    return c.text('something gone wrong')
}  })
  