
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Joinroom ()  {
    const router = useRouter()
    const [roomID, setRoomId] = useState('');
    const [error, setError] = useState(null);
    const [showRoom, setShowRoom] = useState(false);
  
    const pushToRoom = (value = "") => {
        if(value == 'Create Room'){
          router.push('/Room')
        }else if(value === ''){
          setError('Cannot join with empty room id')
          return
        }else{
          router.push(`/Room?roomID=${roomID}`)
          return
        }
    } 
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
            <div className={`${styles.mainDiv} ${inter.className}`}>
                <button className={`${styles.button} ${inter.className}`} onClick={()=>{pushToRoom('Create Room')}}>Create room</button>
                <button className={`${styles.button} ${inter.className}`} onClick={()=>setShowRoom(!showRoom)}> Join room</button>
                {showRoom ? 
                  <div className={`${styles.inpitDiv} ${inter.className}`}>
                    <input 
                      className={`${styles.input} ${inter.className}`} 
                      value={roomID} onChange={(e)=>{setRoomId(e.target.value)}} 
                      placeholder='enter room id'
                    />  <button className={`${styles.button} ${inter.className}`} onClick={()=>{pushToRoom(roomID)}}>GO</button>
                  </div>
                  : null
                }
            </div>
            {error && roomID.length == 0 && showRoom? 
              <div>
                <p className={`${styles.p} ${inter.className}`}>{error}</p>
              </div>
            : null }
        </main>
      </>
    )
  }
  