import { BookOpen, Clock, Users, Star, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const courses = [
    {
      id: 1,
      title: "Lập trình Web Frontend",
      description: "Học HTML, CSS, JavaScript và React để xây dựng giao diện web hiện đại",
      image: "/placeholder.svg?height=200&width=300",
      duration: "12 tuần",
      students: 150,
      rating: 4.8,
      price: "2,500,000 VNĐ",
      level: "Cơ bản",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Phát triển API và server với Node.js, Express và cơ sở dữ liệu",
      image: "/placeholder.svg?height=200&width=300",
      duration: "16 tuần",
      students: 120,
      rating: 4.9,
      price: "3,200,000 VNĐ",
      level: "Trung cấp",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Xây dựng ứng dụng di động với React Native và Flutter",
      image: "/placeholder.svg?height=200&width=300",
      duration: "14 tuần",
      students: 95,
      rating: 4.7,
      price: "2,800,000 VNĐ",
      level: "Trung cấp",
    },
    {
      id: 4,
      title: "Data Science & AI",
      description: "Khoa học dữ liệu và trí tuệ nhân tạo với Python và Machine Learning",
      image: "/placeholder.svg?height=200&width=300",
      duration: "20 tuần",
      students: 80,
      rating: 4.9,
      price: "4,500,000 VNĐ",
      level: "Nâng cao",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Marketing số và quảng cáo trực tuyến hiệu quả",
      image: "/placeholder.svg?height=200&width=300",
      duration: "10 tuần",
      students: 200,
      rating: 4.6,
      price: "1,800,000 VNĐ",
      level: "Cơ bản",
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Thiết kế giao diện và trải nghiệm người dùng chuyên nghiệp",
      image: "/placeholder.svg?height=200&width=300",
      duration: "12 tuần",
      students: 110,
      rating: 4.8,
      price: "2,200,000 VNĐ",
      level: "Cơ bản",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">BHZ Academy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#courses" className="text-muted-foreground hover:text-foreground">
              Khóa học
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground">
              Giới thiệu
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              Liên hệ
            </a>
            <Button>Đăng ký ngay</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nâng cao kỹ năng với
            <span className="text-primary block">Khóa học chất lượng</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn học viên đã thành công trong việc phát triển sự nghiệp với các khóa học thực tế và
            chuyên sâu của chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Khám phá khóa học
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Học viên</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Khóa học</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Hài lòng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Khóa học nổi bật</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chọn khóa học phù hợp với mục tiêu và trình độ của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {course.level}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} học viên
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button>Đăng ký</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tại sao chọn chúng tôi?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Chương trình cập nhật</h3>
                    <p className="text-muted-foreground">
                      Nội dung khóa học được cập nhật liên tục theo xu hướng công nghệ mới nhất
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Giảng viên kinh nghiệm</h3>
                    <p className="text-muted-foreground">
                      Đội ngũ giảng viên có nhiều năm kinh nghiệm thực tế trong ngành
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hỗ trợ tận tình</h3>
                    <p className="text-muted-foreground">Hỗ trợ học viên 24/7 và theo dõi tiến độ học tập cá nhân</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Về chúng tôi"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-xl text-muted-foreground">Sẵn sàng hỗ trợ bạn trong hành trình học tập</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Điện thoại</h3>
              <p className="text-muted-foreground">+84 123 456 789</p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@educenter.com</p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Địa chỉ</h3>
              <p className="text-muted-foreground">123 Đường ABC, Quận 1, TP.HCM</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">EduCenter</span>
              </div>
              <p className="text-muted-foreground">Nơi khởi đầu cho sự nghiệp thành công của bạn</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Khóa học</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Lập trình Web</li>
                <li>Mobile App</li>
                <li>Data Science</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Trung tâm trợ giúp</li>
                <li>Liên hệ</li>
                <li>FAQ</li>
                <li>Chính sách</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Theo dõi</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Facebook</li>
                <li>YouTube</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EduCenter. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
