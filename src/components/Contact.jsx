import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contack Us</h1>
        <form>
            <div>
                <label >Name</label>
                <input type="text" required placeholder='Name' />
            </div>
            <div>
                <label >Email</label>
                <input type="email" required placeholder='abc@xyg.com' />
            </div>
            <div>
                <label >Message</label>
                <input type="text" required placeholder='Tell us about your query...' />
            </div>
            <button type='submit' >Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
