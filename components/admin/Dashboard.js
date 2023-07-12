import React, { useEffect, useRef, useState } from 'react'
import { Section } from '../Section'
import { Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { db } from '@/firebase/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import moment from 'moment/moment'
import { NavAdmin } from './NavAdmin'
import { NewsTable } from './NewsTable'
import { ProductTable } from './ProductTable'
import { AddNews } from './AddNews'
import { EditNews } from './EditNews'
import { EditForm } from './EditForm'
import { EditProductForm } from './EditProductForm'
import { AddProduct } from './AddProduct'

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [news, setNews] = useState();
  const [product, setProduct] = useState();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  const handleNewsChange = (news) => {
    console.log(news)
    setNews(news);
  }

  const handleProductChange = (product) => {
    console.log(product)
    setProduct(product);
  }
  
  return (
    <Flex width="100%" minH={'100vh'}>
        <NavAdmin activeTab={activeTab} onTabChange={handleTabChange} />
        {activeTab === 'news' && <NewsTable  activeTab={activeTab} onTabChange={handleTabChange} onNewsChange={handleNewsChange} newsId={news}  />}
        {activeTab === 'product' && <ProductTable activeTab={activeTab} onTabChange={handleTabChange} onNewsChange={handleProductChange} productId={product} />}
        {activeTab === 'newsForm' && <AddNews  activeTab={activeTab} onTabChange={handleTabChange} />}
        {activeTab === 'productForm' && <AddProduct activeTab={activeTab} onTabChange={handleTabChange} />}
        {activeTab === 'editNews' && <EditForm newsId={news} />}
        {activeTab === 'editProduct' && <EditProductForm productId={product} />}
    </Flex> 
  )
}
