import { createSupabaseClient } from "../utils/supabase"
const supbase = createSupabaseClient();

export async function storeUser(data){
    const {data: insertData, error } = await supbase.from('users').insert(data).select()

    if (error){
        console.log('Error stroing user', error)
        return {suceess: false, error: error.message}
    }

    return {suceess: true, data: insertData}
}

export async function getUserById(passId){
    const  {data, error} = await supbase
    .from('users')
    .select()
    .eq('id', passId)
    .single();

    if(error){
        console.log('Error stroing user', error)
        return {suceess: false, error: error.message}
    }

    return {suceess: true, fetchedUser: data}
}

export async function updateUser(data){

    const {data: updateData, error } = await supbase
    .from('users')
    .update(data)
    .eq('id', data.id)
    .single();

    if(error){
        console.log('Error stroing user', error)
        return {success: false, error: error.message}
    }

    return {success: true, data: updateData}
}

export async function getUserByMobileOrEmail(value){
    const {data, error} = await supbase
    .from('users')
    .select()
    .or(`mobile_number.eq.${value},email.eq.${value}`)
    .single();

    if(error){
        console.log('Error stroing user', error)
        return {success: false, error: error.message}
    }

    return {success: true, data: data}

}
