import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArticlesListView from './persentation/view/ArticlesListView.tsx'
import ArticleDetail from './persentation/view/ArticleDetail.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <Router>
        <Routes>
          <Route path='/' element={<ArticlesListView />} />
          <Route path='/detail' element={<ArticleDetail />} />
        </Routes>
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
)
