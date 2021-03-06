import tissueXylemTrecheid from "../../images/tissueXylemTrecheid.png";
import tissuePhloemFiber from "../../images/tissuePhloemFiber.jpg";

const xylemMarkdown = `
# Xylem

เป็นเนื้อเยื่อที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุต่างๆ ทั้งสารอินทรีย์และสารอนินทรีย์ โดยลำเลียงจากรากขึ้นไปสู่ใบ เพื่อนำน้ำและแร่ธาตุไปใช้ในกระบวนการสังเคราะห์ด้วยแสง ประกอบด้วยเซลล์ 4 ชนิด ดังนี้

## Trecheid

เป็นเซลล์เดี่ยว มีรูปร่างเป็นทรงกระบอกยาว บริเวณปลายเซลล์แหลม ทำหน้าที่เป็นท่อลำเลียงน้ำและแร่ธาตุต่างๆ โดยจะลำเลียงไปทางด้านข้างของลำต้นผ่านรูเล็กๆ (pit) มีผนังเซลล์ที่แข็งแรงจึงทำหน้าที่เป็นโครงสร้างค้ำจุนลำต้นพืช และผนังเซลล์มีลิกนิน (lignin) สะสมอยู่และมีรูเล็กๆ (pit) เพื่อทำให้ติดต่อกับเซลล์ข้างเคียงได้ เมื่อเซลล์เจริญเต็มที่จนกระทั่งตายไป ส่วนของไซโทพลาซึมและนิวเคลียสจะสลายไปด้วย ทำให้ส่วนตรงกลางของเซลล์เป็นช่องว่าง ส่วนของเทรคีดนี้พบมากในพืชชั้นต่ำ (vascular plant) เช่น เฟิน สนเกี๊ยะ เป็นต้น

## Vessel

เป็นเซลล์ที่มีขนาดค่อนข้างใหญ่ แต่สั้นกว่าเทรคีด เป็นเซลล์เดี่ยวๆ ที่ปลายทั้งสองข้างของเซลล์มีลักษณะคล้ายคมของสิ่ว ที่บริเวณด้านข้างและปลายของเซลล์มีรูพรุน ส่วนของเวสเซลนี้พบมากในพืชชั้นสูงหรือพืชมีดอก ทำหน้าที่เป็นท่อลำเลียงน้ำและแร่ธาตุต่างๆ จากรากขึ้นไปยังลำต้นและใบ

![Trecheid and vessel](tissueXylemTrecheid)

## ไซเล็มพาเรคิมา (xylem parenchyma)

รูปร่างเป็น ทรงกระบอกหน้าตัดกลมรีหรือหน้าตัดหลายเหลี่ยม มีผนังเซลล์บางๆ เรียงตัวกันตามแนวลำต้นพืช เมื่อมีอายุมากขึ้นผนังเซลล์จะหนาขึ้นด้วย เนื่องจากมีสารลิกนิน (lignin) สะสมอยู่ และมีรูเล็กๆ (pit) เกิดขึ้นด้วย ไซเล็มพาเรนไคมาบางส่วนจะเรียงตัวกันตามแนวรัศมีของลำต้นพืช เพื่อทำหน้าที่ลำเลียงน้ำและแร่ธาตุต่างๆ ไปยังบริเวณด้านข้างของลำต้นพืช พาเรคิมาทำหน้าที่สะสมอาหารประเภทแป้ง น้ำมัน และสารอินทรีย์อื่นๆ รวมทั้งทำหน้าที่ลำเลียงน้ำและแร่ธาตุต่างๆ ไปยังลำต้นและใบของพืช

## ไซเล็มไฟเบอร์ (xylem fiber)

เซลล์ที่มีรูปร่างยาว มีลักษณะปลายแหลม มีผนังเซลล์หนา มีผนังกั้นเป็นห้องๆ ภายในเซลล์ ทำหน้าที่เป็นโครงสร้างค้ำจุนและให้ความแข็งแรงแก่ลำต้นพืช

![Xylem parenchyma and xylem fiber](tissuePhloemFiber)
`;

const xylemData = {
  markdown: xylemMarkdown,
  images: {
    tissueXylemTrecheid,
    tissuePhloemFiber
  }
};

export default xylemData;
