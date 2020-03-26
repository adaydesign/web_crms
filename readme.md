### ระบบบริหารบ้านพักสวัสดิการข้าราชการศาลยุติธรรม (กรุงเทพมหานคร)

- Create : 26/3/63

### How to install

$ npm install

### How to Run

$ npm start

open browser > http://localhost:8000/


### login

username/password : admin1 -- เจ้าหน้าที่กองสวัสดิการ (role = 1)

username/password : officer1 -- ผู้ดูแลประจำอาคาร (role = 2)

username/password : 1000000000001 -- ผู้อยู่อาศัย (เลขบัตร 13 หลัก) --  (role = 3)

username/password : 9000000000009 -- ผู้ยื่นคำร้อง (เลขบัตร 13 หลัก) -- (role = 4)

## แบ่งงาน

กุล

- appform_register      (แบบหน้า 2)
- appform_register2     (แบบหน้า 2)
- appform_register3     (แบบหน้า 2)
- appform_check         (แบบหน้า 3)
- appform_order         (แบบหน้า 3 - ตรวจสอบลำดับคิว)


ต่อ

- manage_member         (แบบหน้า 4)
- manage_room           (แบบหน้า 5)
- room_bill             (แบบหน้า 7 - ค่าบำรุงรายเดือน ด้านล่าง)
- room_material         (แบบหน้า 8)
- room_data             (แบบหน้า 7)

เอี่ยว

- room_water            (แบบหน้า 7 - แจ้งยอดใช้น้ำ)
- officer_bill          (แบบหน้า 9 - รายการค่าบำรุงรายเดือน)
- officer_material      (แบบหน้า 9)
- appform_approve       (แบบหน้า 3 - อนุมัติ)
- manage_material       (แบบหน้า 6)

