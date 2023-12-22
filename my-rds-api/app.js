const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // cors パッケージの追加

const app = express();
const port = 3000;

// RDSの接続情報を設定
const connection = mysql.createConnection({
  host: 'database-1.ce8n2qmhmbul.ap-southeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'kakeru0910',
  database: 'weight_db',
  port: '3306'
});

// RDSに接続
connection.connect((err) => {
  if (err) {
    console.error('RDS接続エラー:', err.stack);
    return;
  }
  console.log('RDSに接続されました');
});

// CORS 設定
app.use(cors());

// APIエンドポイントの作成
app.get('/api/data', (req, res) => {
  // RDSからデータを取得するクエリを実行
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('クエリエラー:', err.stack);
      res.status(500).send('データの取得に失敗しました');
      return;
    }
    res.json(results);
  });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});
