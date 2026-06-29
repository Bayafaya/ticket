export type ContactOptions = {
  label: string
  value: number
}

export enum ContactsEnum {
  PHONE = 1,
  EMAIL = 2,
  ID = 3
}

export const contactOptions = [
  { label: 'Телефон', value: ContactsEnum.PHONE },
  { label: 'Эл. почта', value: ContactsEnum.EMAIL },
  { label: 'ID партнёра', value: ContactsEnum.ID }
]