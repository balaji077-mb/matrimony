
  
  
  
//   import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';
// import React, { useState } from 'react';
// import {
//   Platform,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   useWindowDimensions,
//   View
// } from 'react-native';
// import { RadioButton } from 'react-native-paper';
  
//   const BasicDetails = () => {
//     const { width } = useWindowDimensions();
//     const isWeb = Platform.OS === 'web';
//     const isMobile = width < 768;
  
//     // State for form fields
//     const [currentStep, setCurrentStep] = useState(1);
//     const [formData, setFormData] = useState({
//       name: '',
//       dob: new Date(),
//       location: '',
//       contactDetails: '',
//       sex: 'male',
//       height: '',
//       weight: '',
//       bodyType: 'average',
//       maritalStatus: 'never married',
//       childrenStatus: 'no children',
//       wantChildren: 'undecided',
//       religion: '',
//       caste: '',
//       subcaste: '',
//       motherTongue: '',
//       dietPreference: 'vegetarian',
//       smoking: 'non-smoker',
//       drinking: 'non-drinker',
//     });
    
//     const [showDatePicker, setShowDatePicker] = useState(false);
  
//     // Total number of steps
//     const totalSteps = 4;
  
//     // Handle form field changes
//     const handleChange = (field, value) => {
//       setFormData({
//         ...formData,
//         [field]: value,
//       });
//     };
  
//     // Date picker change handler
//     const handleDateChange = (event, selectedDate) => {
//       setShowDatePicker(Platform.OS === 'ios');
//       if (selectedDate) {
//         handleChange('dob', selectedDate);
//       }
//     };
  
//     // Next step handler
//     const handleNext = () => {
//       if (currentStep < totalSteps) {
//         setCurrentStep(currentStep + 1);
//       }
//     };
  
//     // Previous step handler
//     const handlePrevious = () => {
//       if (currentStep > 1) {
//         setCurrentStep(currentStep - 1);
//       }
//     };
  
//     // Form submission handler
//     const handleSubmit = () => {
//       console.log('Profile created:', formData);
//       // Here you would typically send this data to your API
//     };
  
//     // Header Component
//     const Header = () => (
//       <View style={isWeb ? { width: '100%', backgroundColor: '#D53F8C', padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 3 } : { width: '100%', backgroundColor: '#D53F8C', padding: 16 }}>
//         <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
//           Create Your Profile
//         </Text>
//         <Text style={{ color: 'white', textAlign: 'center', marginTop: 4 }}>
//           Find your perfect match by completing your profile
//         </Text>
//       </View>
//     );
  
//     // Progress Indicator
//     const ProgressBar = () => (
//       <View style={{ width: '100%', marginTop: 16, paddingHorizontal: 16 }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
//           {[...Array(totalSteps)].map((_, index) => (
//             <View 
//               key={index} 
//               style={{ height: 8, borderRadius: 9999, backgroundColor: index + 1 <= currentStep ? '#D53F8C' : '#D1D5DB', flex: 1, marginHorizontal: 4 }}
//             />
//           ))}
//         </View>
//         <Text style={{ textAlign: 'center', color: '#4B5563' }}>
//           Step {currentStep} of {totalSteps}
//         </Text>
//       </View>
//     );
  
//     // Form sections based on current step
//     const renderFormSection = () => {
//       switch(currentStep) {
//         case 1:
//           return (
//             <View style={{ width: '100%' }}>
//               <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1F2937', marginBottom: 16 }}>
//                 Personal Details
//               </Text>
              
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Full Name</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.name}
//                 onChangeText={(text) => handleChange('name', text)}
//                 placeholder="Enter your full name"
//               />
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Date of Birth</Text>
//               <TouchableOpacity 
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 onPress={() => setShowDatePicker(true)}
//               >
//                 <Text>{formData.dob.toDateString()}</Text>
//               </TouchableOpacity>
              
//               {showDatePicker && (
//                 <DateTimePicker
//                   value={formData.dob}
//                   mode="date"
//                   display="default"
//                   onChange={handleDateChange}
//                 />
//               )}
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Location</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.location}
//                 onChangeText={(text) => handleChange('location', text)}
//                 placeholder="City, State, Country"
//               />
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Contact Details</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.contactDetails}
//                 onChangeText={(text) => handleChange('contactDetails', text)}
//                 placeholder="Phone or Email"
//                 keyboardType="email-address"
//               />
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Gender</Text>
//               <View style={{ flexDirection: 'row', marginBottom: 16 }}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
//                   <RadioButton
//                     value="male"
//                     status={formData.sex === 'male' ? 'checked' : 'unchecked'}
//                     onPress={() => handleChange('sex', 'male')}
//                     color="#D53F8C"
//                   />
//                   <Text style={{ color: '#4B5563' }}>Male</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
//                   <RadioButton
//                     value="female"
//                     status={formData.sex === 'female' ? 'checked' : 'unchecked'}
//                     onPress={() => handleChange('sex', 'female')}
//                     color="#D53F8C"
//                   />
//                   <Text style={{ color: '#4B5563' }}>Female</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <RadioButton
//                     value="other"
//                     status={formData.sex === 'other' ? 'checked' : 'unchecked'}
//                     onPress={() => handleChange('sex', 'other')}
//                     color="#D53F8C"
//                   />
//                   <Text style={{ color: '#4B5563' }}>Other</Text>
//                 </View>
//               </View>
//             </View>
//           );
        
//         case 2:
//           return (
//             <View style={{ width: '100%' }}>
//               <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1F2937', marginBottom: 16 }}>
//                 Physical Attributes
//               </Text>
              
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Height (cm)</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.height}
//                 onChangeText={(text) => handleChange('height', text)}
//                 placeholder="Height in cm"
//                 keyboardType="numeric"
//               />
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Weight (kg)</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.weight}
//                 onChangeText={(text) => handleChange('weight', text)}
//                 placeholder="Weight in kg"
//                 keyboardType="numeric"
//               />
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Body Type</Text>
//               <View style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, marginBottom: 16, overflow: 'hidden' }}>
//                 <Picker
//                   selectedValue={formData.bodyType}
//                   onValueChange={(itemValue) => handleChange('bodyType', itemValue)}
//                   style={{width: '100%'}}
//                 >
//                   <Picker.Item label="Slim" value="slim" />
//                   <Picker.Item label="Athletic" value="athletic" />
//                   <Picker.Item label="Average" value="average" />
//                   <Picker.Item label="Heavy" value="heavy" />
//                 </Picker>
//               </View>
//             </View>
//           );
        
//         case 3:
//           return (
//             <View style={{ width: '100%' }}>
//               <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1F2937', marginBottom: 16 }}>
//                 Family & Status
//               </Text>
              
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Marital Status</Text>
//               <View style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, marginBottom: 16, overflow: 'hidden' }}>
//                 <Picker
//                   selectedValue={formData.maritalStatus}
//                   onValueChange={(itemValue) => handleChange('maritalStatus', itemValue)}
//                   style={{width: '100%'}}
//                 >
//                   <Picker.Item label="Never Married" value="never married" />
//                   <Picker.Item label="Divorced" value="divorced" />
//                   <Picker.Item label="Widowed" value="widowed" />
//                   <Picker.Item label="Separated" value="separated" />
//                 </Picker>
//               </View>
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Children</Text>
//               <View style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, marginBottom: 16, overflow: 'hidden' }}>
//                 <Picker
//                   selectedValue={formData.childrenStatus}
//                   onValueChange={(itemValue) => handleChange('childrenStatus', itemValue)}
//                   style={{width: '100%'}}
//                 >
//                   <Picker.Item label="No Children" value="no children" />
//                   <Picker.Item label="Have Children living with me" value="have children with me" />
//                   <Picker.Item label="Have Children not living with me" value="have children not with me" />
//                 </Picker>
//               </View>
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Want Children</Text>
//               <View style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, marginBottom: 16, overflow: 'hidden' }}>
//                 <Picker
//                   selectedValue={formData.wantChildren}
//                   onValueChange={(itemValue) => handleChange('wantChildren', itemValue)}
//                   style={{width: '100%'}}
//                 >
//                   <Picker.Item label="Want Children" value="want children" />
//                   <Picker.Item label="Don't Want Children" value="don't want children" />
//                   <Picker.Item label="Not Sure" value="undecided" />
//                 </Picker>
//               </View>
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Religion</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.religion}
//                 onChangeText={(text) => handleChange('religion', text)}
//                 placeholder="Your Religion"
//               />
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Caste</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.caste}
//                 onChangeText={(text) => handleChange('caste', text)}
//                 placeholder="Your Caste"
//               />
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Subcaste</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.subcaste}
//                 onChangeText={(text) => handleChange('subcaste', text)}
//                 placeholder="Your Subcaste (optional)"
//               />
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Mother Tongue</Text>
//               <TextInput
//                 style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, padding: 12, marginBottom: 16, width: '100%' }}
//                 value={formData.motherTongue}
//                 onChangeText={(text) => handleChange('motherTongue', text)}
//                 placeholder="Your Mother Tongue"
//               />
//             </View>
//           );
        
//         case 4:
//           return (
//             <View style={{ width: '100%' }}>
//               <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1F2937', marginBottom: 16 }}>
//                 Lifestyle Preferences
//               </Text>
              
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Diet Preference</Text>
//               <View style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, marginBottom: 16, overflow: 'hidden' }}>
//                 <Picker
//                   selectedValue={formData.dietPreference}
//                   onValueChange={(itemValue) => handleChange('dietPreference', itemValue)}
//                   style={{width: '100%'}}
//                 >
//                   <Picker.Item label="Vegetarian" value="vegetarian" />
//                   <Picker.Item label="Non-Vegetarian" value="non-vegetarian" />
//                   <Picker.Item label="Vegan" value="vegan" />
//                   <Picker.Item label="Eggetarian" value="eggetarian" />
//                 </Picker>
//               </View>
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Smoking Habits</Text>
//               <View style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, marginBottom: 16, overflow: 'hidden' }}>
//                 <Picker
//                   selectedValue={formData.smoking}
//                   onValueChange={(itemValue) => handleChange('smoking', itemValue)}
//                   style={{width: '100%'}}
//                 >
//                   <Picker.Item label="Non-Smoker" value="non-smoker" />
//                   <Picker.Item label="Light Smoker" value="light-smoker" />
//                   <Picker.Item label="Regular Smoker" value="regular-smoker" />
//                 </Picker>
//               </View>
  
//               <Text style={{ color: '#4B5563', marginBottom: 4 }}>Drinking Habits</Text>
//               <View style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 6, marginBottom: 16, overflow: 'hidden' }}>
//                 <Picker
//                   selectedValue={formData.drinking}
//                   onValueChange={(itemValue) => handleChange('drinking', itemValue)}
//                   style={{width: '100%'}}
//                 >
//                   <Picker.Item label="Non-Drinker" value="non-drinker" />
//                   <Picker.Item label="Occasional Drinker" value="occasional-drinker" />
//                   <Picker.Item label="Regular Drinker" value="regular-drinker" />
//                 </Picker>
//               </View>
//             </View>
//           );
        
//         default:
//           return null;
//       }
//     };
  
//     // Navigation Buttons
//     const NavigationButtons = () => (
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, marginBottom: 32 }}>
//         {currentStep > 1 ? (
//           <TouchableOpacity
//             style={{ backgroundColor: '#D1D5DB', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6 }}
//             onPress={handlePrevious}
//           >
//             <Text style={{ color: '#4B5563', fontWeight: '500' }}>Previous</Text>
//           </TouchableOpacity>
//         ) : (
//           <View style={{ width: 80 }} />
//         )}
  
//         {currentStep < totalSteps ? (
//           <TouchableOpacity
//             style={{ backgroundColor: '#EC4899', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 6 }}
//             onPress={handleNext}
//           >
//             <Text style={{ color: 'white', fontWeight: '500' }}>Next</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             style={{ backgroundColor: '#DB2777', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 6 }}
//             onPress={handleSubmit}
//           >
//             <Text style={{ color: 'white', fontWeight: '500' }}>Submit</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     );
  
//     return (
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//         <Header />
//         <ScrollView style={{ flex: 1 }}>
//           <View style={isWeb && !isMobile ? { maxWidth: 672, marginLeft: 'auto', marginRight: 'auto', padding: 16 } : { width: '100%', padding: 16 }}>
//             <ProgressBar />
//             <View style={{ marginTop: 24 }}>
//               {renderFormSection()}
//               <NavigationButtons />
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   };
  
//   export default BasicDetails;
  







  
  
  
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import {
  Activity,
  Calendar,
  ChevronsRight,
  Coffee,
  Globe,
  Home,
  Phone,
  Star,
  User
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import { RadioButton } from 'react-native-paper';

const MatrimonialProfile = () => {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isMobile = width < 768;

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    alternateEmail: '',
    dob: new Date(),
    country: '',
    state: '',
    city: '',
    contact1: '',
    contact2: '',
    sex: 'male',
    otherGender: '',
    height: '',
    weight: '',
    bodyType: 'average',
    maritalStatus: 'never married',
    childrenStatus: 'no children',
    wantChildren: 'undecided',
    religion: '',
    caste: '',
    subcaste: '',
    motherTongue: '',
    dietPreference: 'vegetarian',
    smoking: 'non-smoker',
    drinking: 'non-drinker',
    rasi: '',
    nakshatra: '',
  });
  
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Handle form field changes
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Date picker change handler
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      handleChange('dob', selectedDate);
    }
  };

  // Form submission handler
  const handleSubmit = () => {
    console.log('Profile created:', formData);
    // Here you would typically send this data to your API
  };

  // Rasi (Zodiac) options
  const rasiOptions = [
    'Mesha (Aries)', 'Vrishabha (Taurus)', 'Mithuna (Gemini)', 
    'Karka (Cancer)', 'Simha (Leo)', 'Kanya (Virgo)',
    'Tula (Libra)', 'Vrishchika (Scorpio)', 'Dhanu (Sagittarius)',
    'Makara (Capricorn)', 'Kumbha (Aquarius)', 'Meena (Pisces)'
  ];

  // Nakshatra options
  const nakshatraOptions = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 
    'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 
    'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 
    'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 
    'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 
    'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
  ];

  // Country options (sample)
  const countries = ['India', 'USA', 'UK', 'Canada', 'Australia', 'Singapore'];
  
  // Form Section Component
  const FormSection = ({ title, icon, children }) => (
    <View style={{ 
      width: '100%', 
      backgroundColor: 'white', 
      borderRadius: 12, 
      padding: 16, 
      marginBottom: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <View style={{ 
          backgroundColor: '#FCE7F3', 
          borderRadius: 9999, 
          padding: 8, 
          marginRight: 12 
        }}>
          {icon}
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1F2937' }}>
          {title}
        </Text>
      </View>
      {children}
    </View>
  );

  // Form Field Component
  const FormField = ({ label, children }) => (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ color: '#4B5563', marginBottom: 4, fontWeight: '500' }}>{label}</Text>
      {children}
    </View>
  );

  // Custom Input Component
  const CustomInput = ({ value, onChangeText, placeholder, keyboardType = 'default' }) => (
    <TextInput
      style={{ 
        borderWidth: 1, 
        borderColor: '#D1D5DB', 
        borderRadius: 8, 
        padding: 12, 
        width: '100%',
        backgroundColor: '#F9FAFB'
      }}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );

  // Custom Picker Component
  const CustomPicker = ({ selectedValue, onValueChange, items }) => (
    <View style={{ 
      borderWidth: 1, 
      borderColor: '#D1D5DB', 
      borderRadius: 8, 
      overflow: 'hidden',
      backgroundColor: '#F9FAFB'
    }}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{width: '100%'}}
      >
        <Picker.Item label="Select an option" value="" /> 
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
      {/* Header */}
      <View style={{ 
        width: '100%', 
        backgroundColor: '#EC4899',
        paddingVertical: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3
      }}>
        <Text style={{ 
          color: 'white', 
          fontSize: 25, 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}>
         Create Profile
        </Text>
        <Text style={{ 
          color: 'white', 
          textAlign: 'center', 
          marginTop: 6,
          opacity: 0.9,
          fontSize:18
        }}>
          Find your perfect match by completing your profile
        </Text>
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
        <View style={isWeb && !isMobile ? 
          { maxWidth: 768, marginLeft: 'auto', marginRight: 'auto', padding: 24 } : 
          { width: '100%', padding: 16 }
        }>
          
          {/* Personal Details */}
          <FormSection title="Personal Details" icon={<User size={24} color="#EC4899" />}>
            <View style={{ flexDirection: isWeb && !isMobile ? 'row' : 'column' }}>
              <View style={{ flex: 1, marginRight: isWeb && !isMobile ? 8 : 0 }}>
                <FormField label="First Name">
                  <CustomInput
                    value={formData.firstName}
                    onChangeText={(text) => handleChange('firstName', text)}
                    placeholder="Enter your first name"
                  />
                </FormField>
              </View>
              <View style={{ flex: 1, marginLeft: isWeb && !isMobile ? 8 : 0 }}>
                <FormField label="Last Name">
                  <CustomInput
                    value={formData.lastName}
                    onChangeText={(text) => handleChange('lastName', text)}
                    placeholder="Enter your last name"
                  />
                </FormField>
              </View>
            </View>

            <FormField label="Email">
              <CustomInput
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
                placeholder="Enter your email address"
                keyboardType="email-address"
              />
            </FormField>

            <FormField label="Alternate Email (Optional)">
              <CustomInput
                value={formData.alternateEmail}
                onChangeText={(text) => handleChange('alternateEmail', text)}
                placeholder="Enter alternate email address"
                keyboardType="email-address"
              />
            </FormField>

            <FormField label="Date of Birth">
              <TouchableOpacity 
                style={{ 
                  borderWidth: 1, 
                  borderColor: '#D1D5DB', 
                  borderRadius: 8, 
                  padding: 12, 
                  width: '100%',
                  backgroundColor: '#F9FAFB',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>{formData.dob.toDateString()}</Text>
                <Calendar size={20} color="#6B7280" />
              </TouchableOpacity>
              
              {showDatePicker && (
                <DateTimePicker
                  value={formData.dob}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </FormField>

            <FormField label="Gender">
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16, marginBottom: 8 }}>
                  <RadioButton
                    value="male"
                    status={formData.sex === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => handleChange('sex', 'male')}
                    color="#EC4899"
                  />
                  <Text style={{ color: '#4B5563' }}>Male</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16, marginBottom: 8 }}>
                  <RadioButton
                    value="female"
                    status={formData.sex === 'female' ? 'checked' : 'unchecked'}
                    onPress={() => handleChange('sex', 'female')}
                    color="#EC4899"
                  />
                  <Text style={{ color: '#4B5563' }}>Female</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                  <RadioButton
                    value="other"
                    status={formData.sex === 'other' ? 'checked' : 'unchecked'}
                    onPress={() => handleChange('sex', 'other')}
                    color="#EC4899"
                  />
                  <Text style={{ color: '#4B5563' }}>Other</Text>
                </View>
              </View>
              
              {formData.sex === 'other' && (
                <View style={{ marginTop: 8 }}>
                  <CustomInput
                    value={formData.otherGender}
                    onChangeText={(text) => handleChange('otherGender', text)}
                    placeholder="Please specify Gender"
                  />
                </View>
              )}
            </FormField>
          </FormSection>

          {/* Contact Information */}
          <FormSection title="Contact Information" icon={<Phone size={24} color="#EC4899" />}>
            <FormField label="Primary Contact">
              <CustomInput
                value={formData.contact1}
                onChangeText={(text) => handleChange('contact1', text)}
                placeholder="Enter your primary contact number"
                keyboardType="phone-pad"
              />
            </FormField>

            <FormField label="Secondary Contact (Optional)">
              <CustomInput
                value={formData.contact2}
                onChangeText={(text) => handleChange('contact2', text)}
                placeholder="Enter your secondary contact number"
                keyboardType="phone-pad"
              />
            </FormField>

            <FormField label="Country">
              <CustomPicker
                selectedValue={formData.country}
                onValueChange={(itemValue) => handleChange('country', itemValue)}
                items={countries.map(country => ({ label: country, value: country }))}
              />
            </FormField>

            <View style={{ flexDirection: isWeb && !isMobile ? 'row' : 'column' }}>
              <View style={{ flex: 1, marginRight: isWeb && !isMobile ? 8 : 0 }}>
                <FormField label="State">
                  <CustomInput
                    value={formData.state}
                    onChangeText={(text) => handleChange('state', text)}
                    placeholder="Enter your state"
                  />
                </FormField>
              </View>
              <View style={{ flex: 1, marginLeft: isWeb && !isMobile ? 8 : 0 }}>
                <FormField label="City">
                  <CustomInput
                    value={formData.city}
                    onChangeText={(text) => handleChange('city', text)}
                    placeholder="Enter your city"
                  />
                </FormField>
              </View>
            </View>
          </FormSection>

          {/* Physical Attributes */}
          <FormSection title="Physical Attributes" icon={<Activity size={24} color="#EC4899" />}>
            <View style={{ flexDirection: isWeb && !isMobile ? 'row' : 'column' }}>
              <View style={{ flex: 1, marginRight: isWeb && !isMobile ? 8 : 0 }}>
                <FormField label="Height (cm)">
                  <CustomInput
                    value={formData.height}
                    onChangeText={(text) => handleChange('height', text)}
                    placeholder="Height in cm"
                    keyboardType="numeric"
                  />
                </FormField>
              </View>
              <View style={{ flex: 1, marginLeft: isWeb && !isMobile ? 8 : 0 }}>
                <FormField label="Weight (kg)">
                  <CustomInput
                    value={formData.weight}
                    onChangeText={(text) => handleChange('weight', text)}
                    placeholder="Weight in kg"
                    keyboardType="numeric"
                  />
                </FormField>
              </View>
            </View>

            <FormField label="Body Type">
              <CustomPicker
                selectedValue={formData.bodyType}
                onValueChange={(itemValue) => handleChange('bodyType', itemValue)}
                items={[
                  { label: 'Slim', value: 'slim' },
                  { label: 'Athletic', value: 'athletic' },
                  { label: 'Average', value: 'average' },
                  { label: 'Heavy', value: 'heavy' }
                ]}
              />
            </FormField>
          </FormSection>

          {/* Family & Status */}
          <FormSection title="Family & Status" icon={<Home size={24} color="#EC4899" />}>
            <FormField label="Marital Status">
              <CustomPicker
                selectedValue={formData.maritalStatus}
                onValueChange={(itemValue) => handleChange('maritalStatus', itemValue)}
                items={[
                  { label: 'Never Married', value: 'never married' },
                  { label: 'Divorced', value: 'divorced' },
                  { label: 'Widowed', value: 'widowed' },
                  { label: 'Separated', value: 'separated' }
                ]}
              />
            </FormField>

            <FormField label="Children">
              <CustomPicker
                selectedValue={formData.childrenStatus}
                onValueChange={(itemValue) => handleChange('childrenStatus', itemValue)}
                items={[
                  { label: 'No Children', value: 'no children' },
                  { label: 'Have Children living with me', value: 'have children with me' },
                  { label: 'Have Children not living with me', value: 'have children not with me' }
                ]}
              />
            </FormField>

            <FormField label="Want Children">
              <CustomPicker
                selectedValue={formData.wantChildren}
                onValueChange={(itemValue) => handleChange('wantChildren', itemValue)}
                items={[
                  { label: 'Want Children', value: 'want children' },
                  { label: "Don't Want Children", value: "don't want children" },
                  { label: 'Not Sure', value: 'undecided' }
                ]}
              />
            </FormField>
          </FormSection>

          {/* Religion & Culture */}
          <FormSection title="Religion & Culture" icon={<Globe size={24} color="#EC4899" />}>
            <FormField label="Religion">
              <CustomInput
                value={formData.religion}
                onChangeText={(text) => handleChange('religion', text)}
                placeholder="Your Religion"
              />
            </FormField>

            <View style={{ flexDirection: isWeb && !isMobile ? 'row' : 'column' }}>
              <View style={{ flex: 1, marginRight: isWeb && !isMobile ? 8 : 0 }}>
                <FormField label="Caste">
                  <CustomInput
                    value={formData.caste}
                    onChangeText={(text) => handleChange('caste', text)}
                    placeholder="Your Caste"
                  />
                </FormField>
              </View>
              <View style={{ flex: 1, marginLeft: isWeb && !isMobile ? 8 : 0 }}>
                <FormField label="Subcaste">
                  <CustomInput
                    value={formData.subcaste}
                    onChangeText={(text) => handleChange('subcaste', text)}
                    placeholder="Your Subcaste (optional)"
                  />
                </FormField>
              </View>
            </View>

            <FormField label="Mother Tongue">
              <CustomInput
                value={formData.motherTongue}
                onChangeText={(text) => handleChange('motherTongue', text)}
                placeholder="Your Mother Tongue"
              />
            </FormField>
          </FormSection>

          {/* Horoscope Details */}
          <FormSection title="Horoscope Details" icon={<Star size={24} color="#EC4899" />}>
            <FormField label="Rasi (Zodiac Sign)">
              <CustomPicker
                selectedValue={formData.rasi}
                onValueChange={(itemValue) => handleChange('rasi', itemValue)}
                items={rasiOptions.map(rasi => ({ label: rasi, value: rasi }))}
              />
            </FormField>

            <FormField label="Nakshatra (Star)">
              <CustomPicker
                selectedValue={formData.nakshatra}
                onValueChange={(itemValue) => handleChange('nakshatra', itemValue)}
                items={nakshatraOptions.map(nakshatra => ({ label: nakshatra, value: nakshatra }))}
              />
            </FormField>
          </FormSection>

          {/* Lifestyle Preferences */}
          <FormSection title="Lifestyle Preferences" icon={<Coffee size={24} color="#EC4899" />}>
            <FormField label="Diet Preference">
              <CustomPicker
                selectedValue={formData.dietPreference}
                onValueChange={(itemValue) => handleChange('dietPreference', itemValue)}
                items={[
                  { label: 'Vegetarian', value: 'vegetarian' },
                  { label: 'Non-Vegetarian', value: 'non-vegetarian' },
                  { label: 'Vegan', value: 'vegan' },
                  { label: 'Eggetarian', value: 'eggetarian' }
                ]}
              />
            </FormField>

            <FormField label="Smoking Habits">
              <CustomPicker
                selectedValue={formData.smoking}
                onValueChange={(itemValue) => handleChange('smoking', itemValue)}
                items={[
                  { label: 'Non-Smoker', value: 'non-smoker' },
                  { label: 'Light Smoker', value: 'light-smoker' },
                  { label: 'Regular Smoker', value: 'regular-smoker' }
                ]}
              />
            </FormField>

            <FormField label="Drinking Habits">
              <CustomPicker
                selectedValue={formData.drinking}
                onValueChange={(itemValue) => handleChange('drinking', itemValue)}
                items={[
                  { label: 'Non-Drinker', value: 'non-drinker' },
                  { label: 'Occasional Drinker', value: 'occasional-drinker' },
                  { label: 'Regular Drinker', value: 'regular-drinker' }
                ]}
              />
            </FormField>
          </FormSection>

          {/* Submit Button */}
          <TouchableOpacity
            style={{ 
              backgroundColor: '#DB2777',
              paddingVertical: 16,
              borderRadius: 8,
              marginBottom: 32,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3
            }}
            onPress={handleSubmit}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                Next
              </Text>
              <ChevronsRight size={24} color="white" style={{ marginLeft: 8 }} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatrimonialProfile;