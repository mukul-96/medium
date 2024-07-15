import { Hono } from "hono";
import { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client/edge'
import {withAccelerate} from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signinInput } from "@mukul96/medium-common";
import { signupInput } from "@mukul96/medium-common";

export const userRouter=new Hono<{
    Bindings:{
      DATABASE_URL:string;
      JWT_SECRET:string;
    }
  
  }>();

userRouter.post('signup', async(c) => {
    const body=await c.req.json();
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const response=signupInput.safeParse(body);
    if(!response.success)
    {
      c.status(411);
      return c.json({mssg:"wrong inputs"});
    }
    try{
      const user=await prisma.user.create({
        data:{
          userName:body.username,
          password:body.password,
          name:body.name
        }
          })
          const jwt=await sign({id:user.id},c.env.JWT_SECRET);
          c.status(200);
          return c.text(jwt);
    }
    catch(e)
    {
      c.status(411);
      console.log(e)
      return c.text('Invalid')
    }
    
  })
  userRouter.post('/signin',async(c) => {
    const body=await c.req.json();
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const response=signinInput.safeParse(body);
    if(!response.success)
    {
      c.status(411);
      return c.json({mssg:"wrong inputs"});
    }
    try{
      const user=await prisma.user.findFirst({
        where:{
          userName:body.userName,
          password:body.password
        }
      })
      if(!user)
      {
        c.status(403);
        return c.text("incorrect cred");
      }
      const jwt=await sign({id:user.id},c.env.JWT_SECRET);
      return c.text(jwt);
    }
    catch(e){
    return c.text("invalid")}
  })