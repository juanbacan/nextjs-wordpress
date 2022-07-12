import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Image from 'next/image';
import { Button } from '@mui/material';

export default function Index({ posts }) {
  
  console.log(posts);
  
  return (
    <Container maxWidth="lg">

      <Typography variant="h1" component="h1" gutterBottom>
        Trámites Ecuador
      </Typography>

      <Grid container spacing={ 2 }>  
        <Grid item container xs={ 9 }>    
          {
            posts.map(post => (
              <Grid item md={ 6 } sm={ 6 } key={ post.title }>
                <Box mt={4} sx={{ py: 1, px: 2, width: "100%", justifyContent: "center", textAlign: "center" }}>

                  <div style={{width: '100%', height: '250px', position: 'relative'}}>
                    <Image style={{ borderRadius: "8px"}}  layout='fill' objectFit='cover' src={ post.featuredImage.node.sourceUrl } alt={ post.title }/>
                  </div>  
                
                  <Typography variant="h2" component="h2" gutterBottom align='left' mt={ 2 }>
                    {post.title}
                  </Typography>

                  <Box sx={{ 
                    textAlign:'left',
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    "& p": {
                      marginBlockStart: "0",
                  },
                  }} 
                    dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                  >
                  </Box>
                </Box>
                <Box px={ 2 } mt={ 1 }>
                  <Button variant='outlined'>
                    Leer Entrada
                  </Button>
                </Box>
              </Grid>
            ))
          }
        </Grid>
        <Grid item xs={ 3 }>
          { posts.map(post => (
            <Box mt={ 4 } key={ post.title }>
              <Typography variant="h2" component="h2" gutterBottom align='left' mt={ 2 }>
                {post.title}
              </Typography> 
              <Box sx={{ 
                textAlign:'left',
                mb: 1,
                fontSize: 14,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                "& p": {
                  marginBlockStart: "0",
              },
              }} 
                dangerouslySetInnerHTML={{ __html: post.excerpt }} 
              >
              </Box>
              <a href="/">
                Leer más en 3 minutos  
              </a>           
            </Box>
            
          ))}
        </Grid>
      </Grid>

    </Container>
  );
}

export async function getStaticProps() {

  const res = await fetch('https://servidor3.tramitesecuadorbasicos.com/graphql', {
  
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query AllPostsQuery {
          posts {
            nodes {
              slug
              title
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
              categories {
                nodes {
                  name
                  id
                }
              }
            }
          }
        }
      `
    }),
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts.nodes
    },
  };
}
