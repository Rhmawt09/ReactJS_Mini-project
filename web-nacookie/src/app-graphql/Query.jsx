import { gql } from "@apollo/client";

export const GETDATA=gql`
query MyQuery {
    users_Nacookie {
      id
      img
      deskripsi
      nama
      varian
      harga
    }
  }
`