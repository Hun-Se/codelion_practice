const { json } = require('express');
var express = require('express');
var router = express.Router();

const postModel = require("../model/post");
const { any } = require('../module/imageUpload');

router.post('/', async (req, res) => {
  const {title, content} = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    const result = await post.save();
  res.status(200).json({
    message: "upload success!!",
    data: result,
  });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
  
})

// 전체 json 데이터 파일 찾기
router.get('/', async (req,res) => {
  try {
    const result = await postModel.find({});
    res.status(200).json({
      message: "read success!!",
      data: result,
    });
  } catch (error){
    res.status(500).json({
      message: "error",
    })
  }
})

// id를 통해 원하는 데이터 찾기 
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "detail success!",
      data: result,
    })
  } catch (error){
    res.status(500).json({
      message:error,
    })
  }
})

//특정 데이터 찾아서 바꾸기 update
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(id, {
      title: title,
      content: content,
    },{
      new: true,
    }
    );
    res.status(200).json({
      message:"update success!!",
      data: result,
    });
  }
  catch (error) {
    res.status(500).json({
    message: error,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete success!!"
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;