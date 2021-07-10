import React from 'react'
import 'css/template/depression/novel-one-banner.scss'

export default function Depression({data}) {

  const templateName = data.template.split('/')[1]

  return (
    <div className={`depression ${templateName}`}>
      <div className='header'>
        <div className='img'>
          <img src={`/assets/template/depression/${templateName}.png`} alt='lonely girl' />
        </div>
        <div className='title'>
          {data.title}
        </div>
      </div>
      <div className='content'>
        Tôi là một cô gái khá xinh đẹp, mặc dù khi còn nhỏ mẹ tôi luôn nói rằng tôi là một bé gái xấu xí. Chắc các bạn đang tự hỏi tại sao tôi lại nói những chuyện này ngay từ lúc mở đầu? Đó là bởi vì các nhân vật trong truyện của tôi đều là những cô gái khá xinh đẹp, chỉ cần trang điểm thêm một chút thôi cũng đủ khiến nhiều người mê mẩn. Viết như vậy, tôi sẽ nhận được sự hưởng ứng nhiệt tình của độc giả nữ, làm cho họ càng thích truyện của tôi hơn.

        Cho dù bọn con trai có kêu ca rằng xung quanh chúng chẳng thấy cô gái nào xinh cả thì vẫn có đến 90% các cô gái cảm thấy mình chỉ cần ăn mặc đẹp và trang điểm thêm một chút thôi là có thể thành những cô gái xinh đẹp rồi. Vì thế có thể nói rằng có đến 90% đọc giả nữ của tôi là những cô gái xinh đẹp. Các bạn đọc truyện của tôi sẽ dễ dàng hoà nhập vào với nhân vật trong truyện, có cảm giác như mình là nhân vật nữ chính trong câu chuyện. Ở thời hiện đại ngày nay, ai mà không biết tự yêu quý bản thân mình thì người đó quả thực lạc hậu.

        Nếu như bạn cảm thấy dù mình có ăn mặc đẹp đến đâu, trang điểm đến thế nào cũng không thể xinh đẹp được, thì chứng tỏ bạn thuộc vào 10% còn lại. Xin bạn hãy thử suy nghĩ lại về tỷ lệ cụ thể giữa những con số đó và hãy làm điều gì khác biệt. Tôi không thích đọ sức với những người con gái quá xấu.

        Nếu như tôi là một thiếu nữ vô cùng xinh đẹp, thì chắc tôi cũng chẳng có thời gian ở đây để viết cuốn tiểu thuyết này. Bởi vì tôi sẽ bận hẹn hò với những người con trai thật đẹp trai hoặc giàu có, có địa vị. Bởi vì tôi biết rằng tuổi thanh xuân sẽ đi qua thật nhanh, nếu như tôi không tận dụng hết thời gian đó thì sẽ vô cùng uổng phí. Sắc đẹp cũng giống như vậy, đợi đến khi già nua liệu bạn sẽ vẫn còn nhớ đến những người con trai hấp dẫn chăng? Bạn cứ mơ mộng đi. Còn lúc này, những người con gái vô cùng xinh đẹp thường xuất hiện trên màn hình tivi, trên gương, hoặc trong những cửa hàng đồ hiệu nổi tiếng ở các trung tâm thương mại. Thực tế những người con gái vô cũng xinh đẹp có rất nhiều, bạn không nhìn thấy họ chẳng qua là bởi vì bạn chưa nhìn thấy họ mà thôi.

        Nếu như tôi rất xấu hoặc chỉ rất bình thường, tôi cũng không thể viết những dòng chữ này được. Phải có thật nhiều kinh nghiệm thì mới có thể hiểu rõ. Có yêu nhiều mới biết làm thế nào để giương cao ngọn cờ chiến thắng trong tình trường.

        Tôi năm nay hai mươi ba tuổi, mới tốt nghiệp đại học được một năm, kiếm tiền được không nhiều lắm nhưng cũng chẳng đến nỗi chết đói. Nhưng nếu như tôi vẫn cố gắng duy trì việc sử dụng tất cả các sản phẩm chăm sóc da của hãng Sisley, tất cả các mỹ phẩm của hãng Dior, ngày nào cũng lượn lờ ở cửa hàng bán đồ của Louis Vuitton thì chắc là tôi sẽ chết đói trước quầy thanh toán của các cửa hàng.

        Vì thế, suy cho cùng tôi vẫn là một kẻ nghèo. Hàng tháng cầm 2000 tệ tiền lương nhưng ngày ngày luôn mơ tưởng dến cuộc sống của kẻ có lương tháng 2 vạn tệ. Điều này thường làm tôi cảm thấy rất buồn, cuộc sống hàng ngày cũng vì thế mà thấy chật vật hơn.

        Chắc chắn bạn sẽ cười tôi là kẻ mơ ước viển vông. Nhưng mà đúng thế thật, từ ngày bé tôi đã là người như thế. Lúc mười tuổi, khi tôi chỉ đứng đầu lớp về môn ngữ văn, tôi đã bao lần thầm trách cô chủ nhiệm lớp sao không cho tôi làm liên đội trưởng của trường. Lúc mười lăm tuổi, khi tôi chỉ là học sinh đứng đầu của một trường trung học vô danh, tôi đã bao lần mơ đến việc sẽ trở thành một học sinh xuất sắc của trường Trung học Hoa Trung.

        Từ bé đã không biết đến trời cao đất dày là gì, luôn mơ tưởng đến những thứ vượt quá khả năng của bản thân, tôi tự biết cuộc đời mình sẽ có nhiều bi kịch, tôi biết rõ điều này, biết rõ hơn ai hết.

        Thế nhưng, tình yêu lại là một ngoại lệ. Trong tình yêu, tôi chưa bao giờ mơ tưởng cái gì. Anh yêu tôi, chỉ một ngày thôi tôi đã cảm thấy vô cùng mãn nguyện. Anh đã yêu tôi một năm, chắc chắn anh cảm thấy chán, tôi cũng vậy. Anh nói anh yêu tôi một đời ư? Anh cho tôi là con ngốc à? Anh coi tôi là con điên sao? Tôi chẳng bao giờ tin vào điều đó.

        Tôi nói như vậy các bạn đừng bao giờ nghĩ rằng tôi không tin vào tình yêu. Tôi rất tin. Thật đấy, ít ra đã rất tin. Câu chuyện này nói dễ nghe một chút thì là mỗi con người đều có lúc có những tình cảm rất thơ ngây. Còn nói không dễ nghe thì mỗi con người đều có những lúc ngốc nghếch.

      </div>
    </div>
  )
}