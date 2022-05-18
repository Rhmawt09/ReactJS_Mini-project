import { useQuery } from '@apollo/client'
import React from 'react'
import { GETDATA } from '../app-graphql/Query'
import { Card, Icon, Image } from 'semantic-ui-react'
import '../element/OurMenu.css'

const OurMenu = () => {
  const { error, data, loading } = useQuery(GETDATA);
  if (loading) return <h1 className='var-if'>loading</h1>
  if (error) return <h1 className='var-if'>error</h1>
  console.log(data);
  return(
    <div className='menu-style' id='varian'>
      <h1 className='var-judul'>Our Varian Nacookie</h1>
      {data.users_Nacookie.map(item =>{
        return(
          <div className='card inline-block col-2 m-2  ' style={{width:"14rem", backgroundColor:"#9A5E36", color:"#d8aa81", Height:"300px"}}>
           <Card extra style={{backgroundColor:"#9A5E36", textAlign:"center", justifyContent:"Center", innerHeight:"300px", paddingTop:"50px"}}>
               <Image src={item.img} size='10px' ui={false} />
                 <Card.Content extra style={{backgroundColor:"#9A5E36"}}>
                  <Card.Header>{item.nama}</Card.Header>
                    <Card.Meta>
                      <span className='date'>{item.varian}</span>
                    </Card.Meta>
                      <Card.Description>
                        {item.deskripsi}
                      </Card.Description>
                   </Card.Content>
                    <Card.Content extra style={{backgroundColor:"#9A5E36"}}>
                     <a>
                      <Icon name='users-nacookie' />
                        {item.harga}
                     </a>
                   </Card.Content>
           </Card>
          </div>
        )
      })}
    </div>
  )
}

export default OurMenu
