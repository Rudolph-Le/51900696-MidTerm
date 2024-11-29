// Thêm dòng này ở đầu tệp
import React from 'react';

import {
  Box,
  createStyles,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from '@mantine/core';
import { Car, HeartHandshake, Stars } from 'tabler-icons-react';
import { ClientCarousel } from 'components';

const useStyles = createStyles((theme) => ({
  rightBanner: {
    flexWrap:'unset',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[1],
    borderRadius: theme.radius.md
  },
}));

function ClientHomeBanner() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col md={7} lg={8}>
        {/* <ClientCarousel>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(105, theme.colors.teal[3], theme.colors.lime[3]),
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(0, theme.colors.orange[3], theme.colors.red[3]),
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(0, theme.colors.indigo[3], theme.colors.cyan[3]),
            }}
          >
          </Box>
        </ClientCarousel> */}
        <ClientCarousel>
          <Box>
            <img
              src='https://i.ebayimg.com/images/g/RHsAAOSw3rxf5SEB/s-l960.webp'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://pic7.sucaisucai.com/06/82/06782187_2.jpg'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://th.bing.com/th/id/R.6621a7966c92595c56f39ce0f47d7a10?rik=n%2bnMh%2fvjJQHffw&pid=ImgRaw&r=0&sres=1&sresct=1'
              alt='Description of image 1'
              style={{ height: 200, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='data:image/jpeg;base64,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'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
        </ClientCarousel>
      </Grid.Col>
      <Grid.Col md={5} lg={4}>
        <Stack>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <Car size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Miễn phí vận chuyển
              </Text>
              <Text size='sm'>
                100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
              </Text>
            </Stack>
          </Group>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <Stars size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Bảo hành tận tâm
              </Text>
              <Text size='sm'>
                Bất kể giấy tờ thế nào, công ty luôn cam kết sẽ hỗ trợ khách
                hàng tới cùng.
              </Text>
            </Stack>
          </Group>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <HeartHandshake size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Đổi trả 1-1 hoặc hoàn tiền
              </Text>
              <Text size='sm'>
                Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được
                nhu cầu.
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default ClientHomeBanner;
