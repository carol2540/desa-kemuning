import '@/styles/globals.css'
import { theme } from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { Fonts } from '@/components/Fonts'
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
import { AuthProvider } from '@/context/AuthContext'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Layout } from '@/components/Layout';
import { AdminLayout } from '@/components/AdminLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  SwiperCore.use([Autoplay])
  const shouldShowNavbar = !['/Admin'].includes(router.pathname);

  const Wrapper = shouldShowNavbar ? Layout : AdminLayout;

  return (
  <AuthProvider>
    <ChakraProvider theme={theme}>
      <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
            />
        <Fonts />
        <Wrapper><Component {...pageProps} /></Wrapper>

    </ChakraProvider>
  </AuthProvider>

  )
}
