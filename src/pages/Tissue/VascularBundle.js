import tissueVascularBundleDicot from "../../images/tissueVascularBundleDicot.png";
import tissueVascularBundleMonocot from "../../images/tissueVascularBundleMonocot.jpg";

const vascularBundleMarkdown = `
# Vascular bundle

หมายถึงกลุ่มของเนื้อเยื่อที่ทำหน้าที่เกี่ยวข้องกับการลำเลียง ประกอบด้วย

* กลุ่มเนื้อเยื่อลำเลียงอาหาร ([Phloem](#/tissue/phloem))
* กลุ่มเนื้อเยื่อลำเลียงน้ำ ([Xylem](#/tissue/xylem))

## พืชใบเลี้ยงคู่

* [Phloem](#/tissue/phloem) เรียงตัวอยู่ทางด้านนอก
* [Xylem](#/tissue/xylem) เรียงตัวอยู่ทางด้านในหรือด้านที่ติดกับ pith

ระหว่าง [Phloem](#/tissue/phloem) กับ [Xylem](tissue/xylem) จะมีเนื้อเยื่อเจริญที่เรียกว่า [Vascular cambium](#/tissue/vascular-cambium) คั่นกลางอยู่ทำหน้าที่แบ่งเซลล์เพื่อให้กำเนิด Phloem และ Xylem

![Dicot vascular bundle](tissueVascularBundleDicot)

## พืชใบเลี้ยงเดี่ยว

พืชใบเลี้ยงเดี่ยว ส่วนของ [Phloem](#/tissue/phloem) และ [Xylem](tissue/xylem) จะเรียงตัวกันมองคล้ายๆใบหน้าคน มีส่วนของ Vessel อยู่บริเวณคล้ายดวงตา ส่วน Phloem อยู่บริเวณคล้ายหน้าผาก Xylem และ Phloem จะถูกล้อมรอบด้วยเนื้อเยื่อ [Parenchyma](#/tissue/parenchyma) หรืออาจเป็น [Sclerenchyma](#/tissue/sclerenchyma) และเรียกเซลล์ที่มาล้อมรอบนี้ว่า Bundle sheath

Vascular bundle ของพืชใบเลี้ยงเดี่ยวส่วนใหญ่ไม่พบเนื้อเยื่อเจริญ Vascular cambium ยกเว้นหมากผู้หมากเมีย และพืชตระกูลปาล์ม

![Monocot vascular bundle](tissueVascularBundleMonocot)
`;

const vascularBundleData = {
  markdown: vascularBundleMarkdown,
  images: {
    tissueVascularBundleDicot,
    tissueVascularBundleMonocot
  }
};

export default vascularBundleData;
