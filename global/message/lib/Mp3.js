/*  

  Made By Lenwy
  Base : Lenwy
  WhatsApp : wa.me/6283829814737
  Telegram : t.me/ilenwy
  Youtube : @Lenwy

  Channel : https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u

  Copy Code?, Recode?, Rename?, Reupload?, Reseller? Taruh Credit Ya :D

  Deskripsi: Fungsi Untuk Mengambil Hasil Download Dengan Format Mp3
  Mohon Untuk Tidak Menghapus Watermark Di Dalam Kode Ini

*/

const axios = require('axios');

async function LenwyMp3(url) {
    let title, image;
    const getDownloadId = async () => {
      try {
        const response = await axios.get(`https://ab.cococococ.com/ajax/download.php`, {
          params: {
            copyright: 0,
            format: 'mp3',
            url: url,
            api: 'dfcb6d76f2f6a9894gjkege8a4ab232222'
          }
        });
        console.log("API Response Data:", response.data);
        return response.data;
      } catch (error) {
        console.error("Error in getDownloadId:", error.response ? error.response.data : error.message);
        throw new Error('⚠️ Gagal mendapatkan ID unduhan');
      }
    };
    const checkProgress = async (id) => {
      try {
        const response = await axios.get(`https://p.oceansaver.in/ajax/progress.php`, {
          params: { id: id }
        });
        return response.data;
      } catch (error) {
        console.error("Error in checkProgress:", error.response ? error.response.data : error.message);
        throw new Error('⚠️ Gagal memeriksa progres unduhan');
      }
    };
    const pollProgress = async (id) => {
      const data = await checkProgress(id);
      if (data.progress === 1000) {
        return JSON.stringify({
          type: 'mp3 (128 kbps)',
          title: title,
          image: image,
          download_url: data.download_url
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return pollProgress(id);
      }
    };
    try {
      const data = await getDownloadId();
      if (data.success && data.id) {
        title = data.info.title;
        image = data.info.image;
        return await pollProgress(data.id);
      } else {
        throw new Error('⚠️ Gagal mendapatkan ID unduhan');
      }
    } catch (error) {
      console.error("Error in Mp3 function:", error.message);
      return JSON.stringify({ error: error.message });
    }
  }

module.exports = LenwyMp3;
  