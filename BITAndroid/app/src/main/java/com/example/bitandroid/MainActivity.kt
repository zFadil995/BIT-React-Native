package com.example.bitandroid

import android.content.Intent
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    var helloColor: Boolean = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        helloText.setTextColor(Color.GREEN)

        changeButton.setOnClickListener { changeColor() }
        nextButton.setOnClickListener { goToNext() }
    }

    private fun changeColor() {
        helloColor = !helloColor

        if(helloColor){
            helloText.setTextColor(Color.RED)
        }
        else {
            helloText.setTextColor(Color.GREEN)
        }
    }

    private fun goToNext() {
        startActivity(Intent(this, Next::class.java))
    }
}
