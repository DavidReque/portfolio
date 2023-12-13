'use client'

import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'

export const Contact = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div style={{ backgroundColor: '#151030' }} className="p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Send us a message</h3>
            <form>
              <div className="mb-4">
              <Input 
                key='primary'
                type='email' 
                color='primary'
                placeholder="Enter your name"
                className="w-full"
                 />              </div>
              <div className="mb-4">
                <Input 
                key='primary'
                type='email' 
                color='primary'
                placeholder="Enter your mail"
                className="w-full"
                 />
              </div>
              <div className="mb-4">
              <label htmlFor="message" className="block text-sm text-blue-500 mb-1">Message</label>
              <Textarea
                variant="underlined"
                className="w-full"
                /> 
              </div>
              <Button type='submit' color="primary" variant="bordered">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
