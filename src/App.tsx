import { useState } from 'react'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <main className={styles.main}>
        <Header />
        <TaskList />
      </main>
    </div>
  )
}

