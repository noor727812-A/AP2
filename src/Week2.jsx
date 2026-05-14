import React from 'react'

// 1. مكون العنوان - Header
// يستقبل اسم المادة عبر props.course
const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

// 2. مكون الجزء الواحد - Part
// يعرض اسم الجزء وعدد التمارين الخاص به
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

// 3. مكون المحتوى - Content
// يستدعي مكون Part ثلاث مرات ويمرر له البيانات كما هو مطلوب في التمرين
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

// 4. مكون المجموع - Total
// يقوم بجمع التمارين الثلاثة وعرض النتيجة
const Total = (props) => {
  return (
    <p>مجموع التمارين: {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

// 5. تمرين وظيفة إضافي: مكون بطاقة الطالب - StudentCard
// يعرض معلومات الطالب (الاسم، الآيدي، التخصص) مع تنسيق بسيط
const StudentCard = (props) => {
  const cardStyle = {
    border: '2px solid #4CAF50',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '10px',
    backgroundColor: '#f4f4f4',
    maxWidth: '300px'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ color: '#2e7d32', marginTop: '0' }}>بطاقة طالب</h3>
      <p><strong>الاسم:</strong> {props.name}</p>
      <p><strong>الرقم الجامعي:</strong> {props.id}</p>
      <p><strong>التخصص:</strong> {props.major}</p>
    </div>
  );
}

// المكون الرئيسي الذي يجمع كل شيء - App
const App = () => {
  // البيانات المعطاة في الوظيفة
  const course = 'Halfstack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      {/* تطبيق متطلبات التمرين 4 */}
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3} 
      />

      <hr />

      {/* تطبيق تمرين الوظيفة الإضافي: 3 بطاقات مختلفة */}
      <h2>قسم البطاقات الإضافي:</h2>
      <StudentCard name="نور" id="202601" major="Information Technology" />
      <StudentCard name="أسامة" id="202602" major="Software Engineering" />
    <StudentCard name="العيناء" id="202602" major="Software Engineering" />
    </div>
  )
}

export default App
