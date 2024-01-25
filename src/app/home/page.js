"use client"
import { useEffect, useState } from "react"
import styles from "./page.module.css"

export default function Home() {
  const [user, setUser] = useState()

  const initData = async () => {
    const URLParams = new URLSearchParams(window.location.hash.slice(1))
    const accessToken = URLParams.get("access_token")

    if (accessToken) {
      const res = await fetch("https://graph.microsoft.com/v1.0/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      const user = await res.json()
      setUser(user)
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div className={styles.container}>
      {user ? (
        <div className={styles.userGrid}>
          <div>
            <b>ID</b>
            <div>{user.id}</div>
          </div>
          <div>
            <b>Username</b>
            <div>{user.displayName}</div>
          </div>
          <div>
            <b>User principal name</b>
            <div>{user.userPrincipalName}</div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}
