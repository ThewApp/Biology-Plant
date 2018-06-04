import leafView from "../../images/leafView.jpg";
import leafCompare from "../../images/leafCompare.jpg";

const mesophyllMarkdown = `
# Mesophyll

เป็นเนื้อเยื่อที่อยู่ระหว่างชั้น [Epidermis](#/tissue/epidermis) ทั้งสองด้านใน[ใบ](#/leaf/view) ส่วนใหญ่เป็นเนื้อเยื่อพวก [Parenchyma](#/tissue/parenchyma) โดยมี Parenchyma cell ที่มีลักษณะแตกต่างกัน 2 แบบ คือ

## Palisade mesophyll / Palisade parenchyma

เป็นเนื้อเยื่อพาเรนไคมาที่รูปร่างยาวเรียงตัวตั้งฉากกับชั้นเอพิเดอร์มิส ส่วนใหญ่อยู่ทางด้าน upper epidermis อาจมีชั้นเดียวหรือหลายชั้นก็ได้ ภายในเซลล์ palisade cell มีคลอโรพลาสต์อยู่มากจึงมีบทบาทสำคัญในการสังเคราะห์ด้วยแสง

## Spongy mesophyll / Spongy parenchyma

เป็นเนื้อเยื่อพาเรนไคมาที่มีรูปร่างกลม เรียงตัวอยู่อย่างหลวมๆใต้ชั้น palisade mesophyll มีช่องว่างมาก แต่มีคลอโรพลาสต์น้อยกว่า

![Palisade and spongy mesophyll](leafView)

ใน**พืชใบเลี้ยงเดี่ยว**ชั้น Mesophyll จะมีรูปร่างของเซลล์พาเรนไคมาเหมือนกันทั้งชั้น ไม่แยกเป็น Palisade และ Spongy

## พืช C3

ได้แก่ ข้าว ข้าวสาลี ถั่ว เป็นต้น

โครงสร้างภายในของใบจะประกอบด้วย mesophyll cell 2 แบบ คือ palisade mesophyll และ spongy mesophyll และมีกลุ่มเนื้อเยื่อลำเลียงแทรกอยู่ อาจมีกลุ่มเซลล์ล้อมรอบกลุ่มท่อลำเลียง ซึ่งเรียกว่า [Bundle sheath cell](#/tissue/bundle-sheath) หรือไม่ก็ได้

## พืช C4

มักเป็นพืชที่มีถิ่นกำเนิดในเขตศูนย์สูตร เช่น ข้าวโพด อ้อย และบานไม่รู้โรย

ประกอบด้วย Mesophyll cell ชนิดเดียวกระจายรอบๆ โครงสร้างภายในของใบที่เด่นชัดคือ จะมี [Bundle sheath cell](#/tissue/bundle-sheath) ที่มีคลอโรพลาสต์ล้อมรอบกลุ่มท่อลำเลียง

![C3 and C4 plant](leafCompare)
`;

const mesophyllData = {
  markdown: mesophyllMarkdown,
  images: {
    leafView,
    leafCompare
  }
};

export default mesophyllData;
