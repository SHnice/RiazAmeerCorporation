import NextAuth from "next-auth";
import Providers from 'next-auth'
import { connectDB } from "@/utils/db";
import { verifyPassoword } from "@/utils/hashPassword";

export default NextAuth({
    session: {
        jwt: true
    },
    providers:[
        Providers({
            async authorize(Credentials){
                const client = await connectDB()
                const adminCollection = client.db().collection('admin');
                const admin = adminCollection.findOne({email:Credentials.email})

                if(!admin) throw new Error('No such admin found')

                const isValid = await verifyPassoword(Credentials.password,admin.password)

                if(!isValid) throw new Error("could not log in! ")
                
                return {email : admin.email}
                
                client.close()

            }
        })
    ]
})
