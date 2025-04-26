export interface ProfileEditData{

    name: string
    phone: string
} 

export interface ProfileData extends ProfileEditData{
    email: string
}