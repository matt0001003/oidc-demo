"use client"
import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  const linkConfig = {
    pathname:
      "https://login.microsoftonline.com/26083034-b836-4763-905d-2281fb676d5d/oauth2/v2.0/authorize",
    query: {
      response_type: "id_token token",
      scope: "openid email profile User.Read",
      client_id: "134d5b3f-6cd4-4990-be28-5e54a7b2da56",
      redirect_uri: window.location.origin + "/home",
      nonce: "/",
    },
  }

  return (
    <main className={styles.main}>
      <Link href={linkConfig} className={styles.link}>
        <div className={styles.loginButton}>Microsoft Login</div>
      </Link>
    </main>
  )
}
