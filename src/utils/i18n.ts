export type AthleteGender = 'male' | 'female'

export const genderMap: Record<AthleteGender, string> = {
  male: 'Masculino',
  female: 'Feminino',
}

export type AthleteHandedness = 'left' | 'right'

export const handednessMap: Record<AthleteHandedness, string> = {
  left: 'Canhoto',
  right: 'Destro',
}

export type AthleteBloodType =
  | 'a_positive'
  | 'a_negative'
  | 'b_positive'
  | 'b_negative'
  | 'ab_positive'
  | 'ab_negative'
  | 'o_positive'
  | 'o_negative'

export const bloodTypeMap: Record<AthleteBloodType, string> = {
  o_positive: 'O+',
  o_negative: 'O-',
  a_positive: 'A+',
  a_negative: 'A-',
  b_positive: 'B+',
  b_negative: 'B-',
  ab_positive: 'AB+',
  ab_negative: 'AB-',
}
