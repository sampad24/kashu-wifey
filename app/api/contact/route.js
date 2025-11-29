import clientPromise from '../../../lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email,number, message } = await request.json()

    const client = await clientPromise
    const db = client.db('portfolio') // Replace with your database name if different

    const result = await db.collection('contacts').insertOne({
      name,
      number,
      email,
      message,
      created_at: new Date()
    })

    return NextResponse.json({ message: 'Contact saved successfully', data: result })
  } catch (error) {
    console.error('Error inserting data:', error)
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 })
  }
}
