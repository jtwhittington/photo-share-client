import React from 'react'
import Card from 'material-ui/Card/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardMedia from 'material-ui/Card/CardMedia'
import { Loading } from './'
import styled from 'styled-components'

const Photos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    padding 50px;

    >div {
        margin: 10px;
    }
`

const PhotoImg = styled.div`
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center center;
`

export const PhotoCards = ({ photos=[], loading=false }) => loading ?
    <Loading /> :
    <Photos>
        {photos.map(photo => 
            <Card key={photo.id}>
                <CardHeader 
                    title={photo.name}
                    subtitle={`by ${photo.postedBy.name}`}
                    avatar={photo.postedBy.avatar_url} />
                <CardMedia>
                    <PhotoImg style={{backgroundImage: `url(${photo.url})`}} />
                </CardMedia>    
            </Card>
        )}
    </Photos>