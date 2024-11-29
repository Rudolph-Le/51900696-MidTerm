import React from 'react';
// import { useMantineTheme } from '@mantine/core';

interface ElectroLogoProps {
  width?: number;
}

function ElectroLogo({ width = 60 }: ElectroLogoProps) {
  const imageUrl =
    'https://phucanhduong.com/wp-content/uploads/2024/03/Logo-Phuc-Anh-Duong-Final-01-765x1024.png';

  return <img src={imageUrl} width={width} alt='PhucAnhDuong Logo' style={{ marginTop: '50px' }} />;
}

export default ElectroLogo;
