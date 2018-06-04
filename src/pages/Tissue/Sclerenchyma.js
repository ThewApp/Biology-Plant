import tissueSclerenchymaFiberSclereid from "../../images/tissueSclerenchymaFiberSclereid.jpg"
import tissueSclerenchymaFiber from "../../images/tissueSclerenchymaFiber.png"
import tissueSclerenchymaSclereid from "../../images/tissueSclerenchymaSclereid.png"

const sclerenchymaMarkdown = `
# Sclerenchyma

เป็นเนื้อเยื่อที่ประกอบด้วยเซลล์ที่มีผนังหนา ส่วนใหญ่เป็นแบบผนังเซลล์ทุติยภูมิ (Secondary cell wall) มีเซลลูโลสและลิกนินมากทำให้เพิ่มความแข็งแรงแก่พืช เซลล์เมื่อโตเต็มที่จะตาย โดยผนังเซลล์ยังอยู่แต่โพรโทพลาสต์สลายไปเหลือเป็นช่องว่าง เรียกว่า ลูเมน (Lumen)

จำแนกได้เป็น 2 ชนิด ได้แก่

![Fiber and sclereid](tissueSclerenchymaFiberSclereid)

## ไฟเบอร์ (Fiber) หรือเซลล์เส้นใย

เป็นเซลล์ที่มีรูปร่างเล็กเรียวยาว หัวท้ายแหลม ผนังเซลล์หนามากเพราะมีลิกนินและเซลลูโลสมาสะสม แต่มีความเหนียวและยืดหยุ่น ในผนังเซลล์ทุติยภูมิมีรอยเว้าไม่มีขอบ (Simple pit) จำนวนน้อย
ทำหน้าที่ให้ความแข็งแรงแก่พืช พบอยู่ตามส่วนต่างๆ ของพืช เช่น [Cortex](#/tissue/cortex) ปะปนอยู่ใน[ท่อลำเลียง](#/tissue/vascular-bundle)หรืออยู่โดยรอบท่อลำเลียง มีประโยชน์มากในทางเศรษฐกิจ โดยใช้ทำเป็นเชือก กระดาษ ทอเป็นเสื้อผ้าและกระสอบ

![Fiber](tissueSclerenchymaFiber)

## สเกลอรีด (Sclereid) หรือ Stone cell

เป็นเซลล์ที่มีลักษณะคล้ายไฟเบอร์แต่ละเซลล์สั้นกว่า รูปร่างมีหลายแบบ ทั้งรูปกลมหลายเหลี่ยม เป็นท่อนยาวหรือเป็นแฉกคล้ายดาว ผนังเซลล์หนามากเนื่องจากมีลิกนินมาสะสม พบรอยเว้าไม่มีขอบจำนวนมากและเป็นรอยเว้าไม่มีขอบที่มักแตกแขนงหรือแยกสาขา
พบในส่วนของพืชที่แข็ง เช่น เปลือกของเมล็ดหรือผลไม้ ได้แก่ กะลามะพร้าว เมล็ดพุทรา เนื้อผลไม้ที่สุก เช่น ละมุดน้อยหน่า ฝรั่ง ท้อ สาลี่ อาจพบแทรกในชั้นคอร์เทกซ์ ในท่อลำเลียงของลำต้น ในส่วนของใบและก้านใบ เป็นต้น ทำหน้าที่เพิ่มความแข็งแรงให้แก่ส่วนต่างๆ ของพืช

![Sclereid](tissueSclerenchymaSclereid)

รอยเว้า (pit) คือ รอยบางที่เกิดขึ้นบนผนังเซลล์ทุติยภูมิ เนื่องจากเป็นบริเวณที่ไม่มีการสะสมสารพวกลิกนิน
`;

const sclerenchymaData = {
  markdown: sclerenchymaMarkdown,
  images: {
    tissueSclerenchymaFiberSclereid,
    tissueSclerenchymaFiber,
    tissueSclerenchymaSclereid
  }
};

export default sclerenchymaData;
