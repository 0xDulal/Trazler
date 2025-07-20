import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
      },
      email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                  validator: function (v) {
                        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
                  },
                  message: props => `${props.value} is not a valid email!`
            }
      },
      password: {
            type: String,
            required: true,
            minlength: 6,
            select: false,
      },
      verifyOtp: {
            type: String,
           default: '',
      },
      verifyOtpExpires: {
            type: Number,
            default: 0,
      },
      isVerified: {
            type: Boolean,
            default: false,
      },
      resetOtp: {
            type: String,
            default: '',
      },
      resetOtpExpires: {
            type: Number,
            default: 0,
      },
      createdAt: {
            type: Date,
            default: Date.now,
      },
      updatedAt: {
            type: Date,
            default: Date.now,
      }
}, {
      timestamps: true,
});

const User = mongoose.model.user || mongoose.model('User', userSchema);

export default User;