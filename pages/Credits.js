import { Section } from '@/components'
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Heading, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const Credits = () => {
    const crewList = [
        'Dr. Ninok Leksono, selaku Rektor Universitas Multimedia Nusantara.',
        'Muhammad Cahya Mulya Daulay, S.Sn., M.Ds., selaku Dekan Fakultas Seni dan Desain Universitas Multimedia Nusantara.',
        'Fonita Theresia Yoliando, S.Ds., M.A., selaku Ketua Program Studi Desain Komunikasi Visual Universitas Multimedia Nusantara.',
        'Leonardo Adi Dharma Widya, S.Sn., M.Ds., sebagai Pembimbing pertama yang telah memberikan bimbingan, arahan, dan motivasi atas terselesainya laporan Cluster MBKM ini.',
        'Wuri Hardini V., Andy Firmansyah, Esmeralda Ida R, selaku pihak LPPM (Lembaga Penelitian dan Pengabdian Masyarakat) UMN yang telah menyiapkan segala keperluan kegiatan MBKM proyek desa.',
        'Dadang S.Ip, selaku Kepala Desa Kemuning yang telah mengizinkan dan menyambut dengan baik adanya perancangan yang ditawarkan oleh kelompok penulis.',
        'M. Solahudin, sebagai Pembimbing Eksternal/Pembimbing Lapangan yang telah memberikan bimbingan, arahan, dan motivasi atas terselesainya karya dalam proyek cluster MBKM ini.',
        'Lidia Yamin, sebagai UI Designer website Desa Kemuning.',
        'Kenny Chong, sebagai UX Designer website Desa Kemuning.',
        'Ferbie Viona, sebagai perancang buku manual website Desa Kemuning.',
        'Yansen Agustian, sebagai Content Creator website Desa Kemuning.',
        'Lifosmin Simon, sebagai Front-end dan Back-end Developer website Desa Kemuning.'
      ];
    
      const nestedList = (
        <OrderedList mt={2} pl={6} spacing={2}>
          <ListItem  ps={3}  >
            
            M. Solahudin, sebagai Pembimbing Eksternal/Pembimbing Lapangan yang telah memberikan bimbingan, arahan, dan motivasi atas terselesainya karya dalam proyek cluster MBKM ini.
          </ListItem>
        </OrderedList>
      );
    
  return (
    <Section justifyContent={'center'} paddingTop={'120px'}>
        <Box textAlign={'center'} color={'primary.100'}>
            <Heading mb={10}>Di balik layar Website Kemuning Legok</Heading>
            <Text textAlign={'start'} mb={6}>Puji Syukur kepada Tuhan yang Maha Esa karena telah memberikan berkat serta bimbingan bagi seluruh tim perancangan WEBSITE DESA KEMUNING LEGOK, sehingga terselesaikannya proyek ini tepat pada waktunya.</Text>
            <Text textAlign={'start'} mb={6}>Terima kasih kepada:</Text>
            <OrderedList spacing={4} textAlign={'start'}> 
            {crewList.map((crew, index) => (
                <ListItem ps={3} key={index}>
                {crew === 'Dadang S.Ip, selaku Kepala Desa Kemuning yang telah mengizinkan dan menyambut dengan baik adanya perancangan yang ditawarkan oleh kelompok penulis.' ? (
                    <>
                    {crew}
                    {nestedList}
                    </>
                ) : (
                    crew
                )}
                </ListItem>
            ))}
            </OrderedList>
            <Text textAlign={'start'} my={6}>
            Dengan website ini semoga dapat digunakan dengan baik dan tepat serta bisa menjadi media informasi berkala bagi pribadi maupun bagi sesama. 
            </Text>
        </Box>
    </Section>
  )
}

export default Credits