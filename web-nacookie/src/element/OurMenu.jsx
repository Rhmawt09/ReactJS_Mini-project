import { useQuery } from '@apollo/client'
import React from 'react'
import { GETDATA } from '../app-graphql/Query'
import { Card, Icon, Image } from 'semantic-ui-react'

const OurMenu = () => {
  const { error, data, loading } = useQuery(GETDATA);
  if (loading) return <h1>loading</h1>
  if (error) return <h1>error</h1>
  console.log(data);
  return(
    <div>
      {data.users_Nacookie.map(item =>{
        return(
          <div>
           <Card>
               <Image src={item.img} size='10px' ui={false} />
                 <Card.Content>
                  <Card.Header>{item.nama}</Card.Header>
                    <Card.Meta>
                      <span className='date'>{item.varian}</span>
                    </Card.Meta>
                      <Card.Description>
                        {item.deskripsi}
                      </Card.Description>
                  </Card.Content>
                    <Card.Content extra>
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
