import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock course data with enhanced content
const courseData = {
  id: 1,
  title: 'Introduction to Forestry',
  description: 'This course provides a comprehensive introduction to forestry, covering topics such as forest ecosystems, tree species, conservation practices, and sustainable management techniques. Learn from industry experts and develop essential skills for a career in environmental science.',
  longDescription: `Forests cover approximately 30% of the Earth's land surface and play a critical role in biodiversity, climate regulation, and human well-being. This course delves into the science and art of forestry, examining how forests function, how they can be managed sustainably, and the challenges they face in a changing world.

Throughout this 6-week course, you'll gain a solid foundation in forestry principles, from understanding forest ecology to learning practical techniques for forest assessment and management. Through video lectures, interactive quizzes, and virtual field exercises, you'll develop a deep appreciation for forest ecosystems and the skills to help protect them.`,
  category: 'Environmental Science',
  level: 'Beginner',
  rating: 4.5,
  enrolled: 1200,
  instructor: 'Dr. Jane Smith',
  instructorTitle: 'Professor of Environmental Science',
  instructorBio: 'Dr. Jane Smith has over 15 years of experience in forestry research and education. She has conducted field research in diverse forest ecosystems around the world and is dedicated to training the next generation of forest stewards.',
  instructorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
  duration: '6 weeks',
  lessons: 18,
  videoHours: 12,
  image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
  sections: [
    { 
      title: 'Forest Ecosystems', 
      lessons: 5,
      content: ['Introduction to Forest Types', 'Forest Succession', 'Nutrient Cycling', 'Forest Hydrology', 'Forest Microbiomes']
    },
    { 
      title: 'Tree Identification', 
      lessons: 4,
      content: ['Conifer Identification', 'Hardwood Identification', 'Using Dichotomous Keys', 'Field Techniques']
    },
    { 
      title: 'Conservation Practices', 
      lessons: 5,
      content: ['Biodiversity Conservation', 'Protected Areas', 'Habitat Restoration', 'Wildlife Management', 'Conservation Policy']
    },
    { 
      title: 'Sustainable Management', 
      lessons: 4,
      content: ['Principles of Sustainable Forestry', 'Forest Inventory Techniques', 'Harvesting Methods', 'Certification Systems']
    },
  ],
  learningOutcomes: [
    'Understand the components and functions of forest ecosystems',
    'Identify common tree species and their characteristics',
    'Apply conservation practices to protect forest biodiversity',
    'Implement sustainable forest management strategies',
    'Analyze forestry data and make management recommendations',
    'Communicate effectively about forestry issues to diverse audiences'
  ],
  requirements: [
    'No prior knowledge of forestry required',
    'Basic understanding of biology is helpful but not required',
    'Interest in environmental science and conservation',
    'Access to a computer with internet connection',
    'Willingness to participate in virtual field exercises'
  ],
  relatedCourses: [
    { id: 2, title: 'Advanced Forest Management', level: 'Advanced' },
    { id: 3, title: 'Wildlife Conservation', level: 'Intermediate' },
    { id: 4, title: 'Sustainable Logging Practices', level: 'Intermediate' }
  ]
};

function CourseDetail() {
  const { id } = useParams<{ id: string }>(); // Get course ID from URL
  const [activeSection, setActiveSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Loading animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // In a real app, we would fetch course data based on ID
  const course = courseData;

  // Toggle section expansion
  const toggleSection = (index: number) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero section with course banner */}
        <div className={`relative rounded-xl overflow-hidden mb-8 shadow-xl transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900 bg-opacity-70"></div>
          </div>
          
          <div className="relative py-16 px-6 sm:py-24 sm:px-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {course.category} • {course.level}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 animate-fade-in">{course.title}</h1>
              <p className="text-lg text-indigo-100 mb-6 animate-fade-in">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="ml-3">
                    <p className="text-white font-medium">{course.instructor}</p>
                    <p className="text-indigo-200 text-sm">{course.instructorTitle}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-400'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-white ml-2">({course.rating})</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">{course.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-white">{course.enrolled} students</span>
                </div>
              </div>
              
              <button className="mt-4 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 animate-scale-in">
                Enroll Now - Free
              </button>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Course content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About this course */}
            <div className={`bg-white rounded-xl shadow-md p-6 transform transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this course</h2>
              <p className="text-gray-700 mb-6 whitespace-pre-line">{course.longDescription}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center text-indigo-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Duration</span>
                  </div>
                  <p className="text-gray-700">{course.duration}</p>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center text-indigo-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Video Content</span>
                  </div>
                  <p className="text-gray-700">{course.videoHours} hours</p>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center text-indigo-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-medium">Level</span>
                  </div>
                  <p className="text-gray-700">{course.level}</p>
                </div>
              </div>
            </div>
            
            {/* Course Content */}
            <div className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
                <div className="mt-2 flex justify-between text-sm">
                  <p className="text-gray-500">{course.sections.length} sections • {course.lessons} lessons • {course.videoHours} hours total</p>
                  <button className="text-indigo-600 font-medium hover:text-indigo-500">Expand all sections</button>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {course.sections.map((section, idx) => (
                  <div key={idx} className="bg-white hover:bg-gray-50 transition-colors duration-150">
                    <button
                      className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                      onClick={() => toggleSection(idx)}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeSection === idx ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                          {idx + 1}
                        </div>
                        <span className="ml-3 font-medium text-left">{section.title}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-4">{section.lessons} lessons</span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${expandedSections.includes(idx) ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* Expanded section content */}
                    <div className={`px-6 pb-4 transition-all duration-300 ease-in-out overflow-hidden ${expandedSections.includes(idx) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="pl-11 space-y-2">
                        {section.content.map((lesson, lessonIdx) => (
                          <li key={lessonIdx} className="flex items-start">
                            <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Learning Outcomes */}
            <div className={`bg-white rounded-xl shadow-md p-6 transform transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Sidebar */}
          <div className="space-y-8">
            {/* Instructor Card */}
            <div className={`bg-white rounded-xl shadow-md p-6 transform transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Instructor</h2>
              <div className="flex items-center mb-4">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{course.instructor}</h3>
                  <p className="text-gray-600 text-sm">{course.instructorTitle}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{course.instructorBio}</p>
            </div>
            
            {/* Requirements Card */}
            <div className={`bg-white rounded-xl shadow-md p-6 transform transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Related Courses Card */}
            <div className={`bg-white rounded-xl shadow-md p-6 transform transition-all duration-500 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Courses</h2>
              <div className="space-y-4">
                {course.relatedCourses.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/course/${related.id}`} 
                    className="block p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-150"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{related.title}</span>
                      <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">{related.level}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail; 