import React from 'react'
import Sidebare from '@/components/admin/Sidebare'
export default function admin() {
  return (
    <div>
        <div className='flex flex-row'>
            <Sidebare/>
            <div className='flex-1 p-4'>
                <h1>hello buddy</h1>
            </div>
        </div>
        
    </div>
  )
}
