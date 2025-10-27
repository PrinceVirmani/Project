"use client"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form';

const Signupform = () => {
    const form = useForm();
    const [value, setValue] = useState("");
  return (
    <>
    <div className='flex w-full'>
        <div className='w-1/2 max-h-screen border black p-10 m-10 flex flex-col items-center justify-between gap-5'>
        <FormProvider {...form}>
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
                <Input defaultValue={value ?? ''}  placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
                <Input defaultValue={value ?? ''}  placeholder="password" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        </FormProvider>
    </div>
        <div className='w-1/2 max-h-screen border black p-10 m-10 flex flex-col items-center justify-between gap-5'>
        <FormProvider {...form}>
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
                <Input defaultValue={value ?? ''}  placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
                <Input defaultValue={value ?? ''}  placeholder="password" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        </FormProvider>
    </div>
    </div>
    
    </>
  )                         
}

export default Signupform