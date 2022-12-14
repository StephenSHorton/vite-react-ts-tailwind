import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {/* Footer */}
    </div>
  )
}

export default App
