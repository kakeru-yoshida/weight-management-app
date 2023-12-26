const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// RDSの接続情報を設定
const connection = mysql.createConnection({
  host: 'database-1.ce8n2qmhmbul.ap-southeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'kakeru0910',
  database: 'weight_db',
  port: '3306',
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

// ボディーパーサーミドルウェア
app.use(express.json());

// データを保存するためのAPIエンドポイント
app.route('/api/data')
  .get((req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('クエリエラー:', err.stack);
        res.status(500).send('データの取得に失敗しました');
        return;
      }
      res.json(results);
    });
  })
  .post(async (req, res) => {
    const { selectedDate, weight } = req.body;

    // 受信したデータの検証
    if (!selectedDate || !weight) {
      return res.status(400).json({ error: '無効なデータが提供されました' });
    }

    // すでに登録されているnumの最大値を取得
    const getMaxNumQuery = 'SELECT MAX(num) AS maxNum FROM users';
    const maxNumResult = await queryAsync(getMaxNumQuery);

    // 新しいnumを決定
    const newNum = (maxNumResult[0].maxNum || 0) + 1;

    // データベースにデータを挿入
    const insertQuery = 'INSERT INTO users (num, date, weight, target_weight) VALUES (?, ?, ?, ?)';
    
    // プレースホルダーを使って変数をクエリにセットする
    connection.query(insertQuery, [newNum, selectedDate, weight, 75], (err, results) => {
      if (err) {
        console.error('DB挿入エラー:', err.stack);
        res.status(500).send('データの登録に失敗しました');
        return;
      }

      res.json({ message: 'データが正常に登録されました' });
    });
});

// 非同期にクエリを実行する関数
function queryAsync(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}


// サーバーの起動
app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});