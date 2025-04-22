import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <h1>Home</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  )
}

export default Home
