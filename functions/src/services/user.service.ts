import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

export const signUp = functions.https.onCall(async (data, context) => {
    try {
        const { email, password } = data;
        const authRecord = await admin.auth().createUser({ email, password });
        return authRecord.uid;
    } catch (error) {
        console.error('Error creating user', error);
        throw new Error('There was a problem creating the user, please try again later.');
    }
});