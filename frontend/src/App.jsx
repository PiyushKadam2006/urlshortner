import React from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios';

const App = () => {
  
  const [originalUrl,setOriginalUrl]= useState('');
  const [shortUrl,setShortUrl]= useState('');
  const [loading,setLoading]=useState(false);
  const [error,setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit= async(e)=>{
    e.preventDefault();
    setLoading(true);
    setError('');
    setShortUrl('');

    try{
      const response = await axios.post('http://localhost:8080/api/url/shorten',{
        original_url:originalUrl
      });

      const shortId = response.data.short_id;
      setShortUrl(`http://localhost:8080/${shortId}`);
    }catch(err){
      setError('URL short karne mein error aayi. Kripya dubara try karein.');
      console.error(err);
    }finally{
      setLoading(false);
    }
  };

  const handleCopy = () => {
  navigator.clipboard.writeText(shortUrl);
  setCopied(true);
  
  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  return (
    <div className="container" style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1> MERN URL Shortner</h1>
       <form onSubmit={handleSubmit} style={{marginBottom:'20px'}}>
        <input type="url" 
        placeholder="https://example.com/very-long-link"
         value={originalUrl}
         onChange={(e)=>setOriginalUrl(e.target.value)}
         required
         style={{padding:'10px',width:'300px',marginRight:'10px'}}
        />
        <button type='submit' disabled={loading} style={{padding: '10px 20px' , cursor:'pointer'}}>
          {loading ?'Shortening...':'Shorten'}
        </button>
       </form>
       
       {error && <p style={{color:'red'}}>{error}</p>}

       {shortUrl && (
        <div style={{marginTop:'20px',padding:'15px',border:'1px solid #ccc',display:'inline-block',borderRadius:'8px' ,backgroundColor: '#f9f9f9', color: '#333'}}>
          <p style={{ margin: '0 0 10px 0' }}><strong>Aapka Short Url taiyar hai :</strong></p>
         <a href={shortUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', fontSize: '18px' }}>
            {shortUrl}
          </a>

          <button
           onClick={handleCopy}
           style={{
            padding: '5px 10px ',
            cursor : 'pointer',
            backgroundColor:copied ? '#28a745' : '#007bff',
            color: 'white' ,
            border: 'none' ,
            borderRadius: '4px'
           }}
           >
            {copied? 'Copied ' : 'copy'}
          </button>
        </div>
       )}
    </div>
  )
}

export default App
