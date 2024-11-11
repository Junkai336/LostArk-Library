import * as Type from "./CharacterInfoType";

import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CharacterInfoPresenter({ characterDetail, error }: any) {
  return (
    <>
      <Container maxWidth="xl" sx={{marginTop: "2px"}}>
        {error ? (<Alert severity="error">{error}</Alert>) : ('')}

        {characterDetail ? (
          <Grid container spacing={4} minHeight={1400}>
            <Grid size={4}>
              <Card
                sx={{
                  display: 'block',
                  backgroundImage: `url('${characterDetail.CharacterArmoryProfile.CharacterImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "rgb(21, 24, 29)",
                  height: 500,
                  color: "#fff",
                  position: "relative",
                }}
              >
                <CardContent>
                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      닉네임
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.CharacterName}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      서버
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.ServerName}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      길드
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.GuildName != null ? characterDetail.CharacterArmoryProfile.GuildName : '' }`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      클래스
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.CharacterClassName}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      칭호
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.Title}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      아이템
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.ItemAvgLevel}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      전투
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.CharacterLevel}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      원정대
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.ExpeditionLevel}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      스포
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.TotalSkillPoint}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      PVP
                    </Box>
                    {`${characterDetail.CharacterArmoryProfile.PvpGradeName}`}
                  </Typography>

                  <Typography gutterBottom sx={{ display: "flex", gap: "6px", fontSize: 14 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: 50,
                        height: 20,
                        borderRadius: 1.2,
                        bgcolor: 'gray',
                      }}
                    >
                      영지
                    </Box>
                    {`Lv.${characterDetail.CharacterArmoryProfile.TownLevel} ${characterDetail.CharacterArmoryProfile.TownName}`}
                  </Typography>

                </CardContent>
              </Card>

              <Card>
                <Typography gutterBottom sx={{ display: "block", gap: "6px", fontSize: 14, marginTop: "4px" }}>
                수집형 포인트
                </Typography>
              </Card>
            </Grid>

            <Grid size={8}>
              <div style={{ border: '1px solid black' }}>a

              </div>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Container>
    </>
  )
}

export default CharacterInfoPresenter;