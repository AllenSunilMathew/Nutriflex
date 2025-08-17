import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Exercises() {
  return (
    <>
      <section>
        <h3 className="text-3xl font-bold text-center mb-8">“Exercises for a Healthy Body”</h3> <br />

        <div className='  row ml-5 px-5'>

          {/* c1 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jogging
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* c2 */}

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRh1XYZm2FHiT8rBeVADsOrnhWkPcW53umhRvkTAPTO2xMsM5Z6"
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pushups
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  The push-up (press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis, and the midsection as a whole
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="http://t0.gstatic.com/images?q=tbn:ANd9GcQy89VgYKit-U-W6Pl8CyV0BX9169zc2uuIUrQ_sgQmcfTrn6IA"
                alt="push"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Glute bridge
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                               </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="data:image/jpeg;base64,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"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plank
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Squats
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Burpee
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mountain Climber
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dead Lift
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Leg Raises
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Squat Jump
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pull ups
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_MruU7fYwsWpGv1G2fD-t0wOKIHczQwiIWWUereXq_UeWwIlrUu3d19MKZhVWzv9aF1YzhZu6k_Q-aGFjee3wjbsJ6iYbPEiRRT81PKblVg"
                alt="jogging"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  leg press
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus deserunt exercitationem quo aut ex optio natus sit consequatur. Deleniti aut omnis, eum harum suscipit at? Quam voluptates veniam nulla.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </section >
      <section className='ml-1 px-2 text-center mb-5 text-dark justify-content-center align-item-center d-flex'>

          <div className='row'>
            <div class="card w-80 mt-5 text-center justify-item-center ">
              <div class="card-body ">
                <h5 class="card-title">Way to Diete</h5>
                <p class="card-text">Fuel your body  and Mind.</p>
                <a href="./diet" class="btn btn-primary">Explore Your Diet Tips</a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Exercises
