import React from 'react'
import './homepage.css'

function homepage() {
  return (
    <div className='home-page'>
      <div className='header-conatiner'>
        <div>
            <input
            placeholder='Search Project'
            className='input'
          />
        </div>
        <div className='filter'>
            <h2 >Filter</h2>
        </div>
          
      </div>
      <div className='body-container'>
          <div className='task-container'>
        <div className='expired-task'>
            <p>Expired Tasks</p>
            <h1>5</h1>
        </div>
         <div className='All-active-task'>
            <p>All Active Tasks</p>
            <h1>2</h1>
        </div>
         <div className='completed-task'>
            <p>Completed Tasks</p>
            <h1>2/7</h1>
        </div>
          <button>Add Task</button>
          </div>
          <div className='todo-container'>
              <h1>To-Do</h1>
              <div className='tasks'>
                  <button>Low</button>
                  <h1>Brainstorming</h1>
                  <p>Brainstorming brings team members' diverse experience into play.</p>
                  <p>Deadline: 12/5/24</p>
              </div>
              <div className='tasks'>
                  <button>High</button>
                  <h1>Brainstorming</h1>
                  <p>Brainstorming brings team members' diverse experience into play.</p>
                  <p>Deadline: 12/5/24</p>
              </div>
              <div className='tasks'>
                  <button>High</button>
                  <h1>Brainstorming</h1>
                  <p>Brainstorming brings team members' diverse experience into play.</p>
                  <p>Deadline: 12/5/24</p>
              </div>
          </div>
          <div className='todo-container'>
              <h1>On Progress</h1>
              <div className='tasks'>
                  <button>Low</button>
                  <h1>Onboarding Illustrations</h1>
                  <p>Deadline: 12/5/24</p>
              </div>
              <div className='tasks'>
                  <button>Low</button>
                  <h1>Moodboard</h1>
                  <p>Deadline: 12/5/24</p>
              </div>
          </div>
          <div className='todo-container'>
              <h1>Done</h1>
              <div className='tasks'>
                  <button>Completed</button>
                  <h1>Mobile App Design</h1>
                  <p>Deadline: 12/5/24</p>
              </div>
              <div className='tasks'>
                  <button>Completed</button>
                  <h1>Design System</h1>
                  <p>It just needs to adapt the UI from what you did before</p>
                  <p>Deadline: 12/5/24</p>
              </div>
        
          </div>
      </div>
    </div>
  )
}

export default homepage
