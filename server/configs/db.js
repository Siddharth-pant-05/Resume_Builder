import mongoose from 'mongoose'

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000, // bumped way up to rule out timeout-too-short
    connectTimeoutMS: 30000,
})
        console.log('Database connected successfully')
    }
    catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
    if (error.reason?.servers) {
        for (const [host, desc] of error.reason.servers) {
            console.error(`--- ${host} ---`)
            console.error('error name:', desc.error?.name)
            console.error('error message:', desc.error?.message)
            console.error('error code:', desc.error?.code)
        }
    }
}
}