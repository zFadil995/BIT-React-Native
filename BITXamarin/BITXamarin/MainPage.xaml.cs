using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace BITXamarin
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        private bool helloColor;
        public MainPage()
        {
            InitializeComponent();
        }

        private void ChangeButtonClicked(object sender, EventArgs e)
        {
            helloColor = !helloColor;
            helloText.TextColor = helloColor ? Color.Red : Color.Green;
        }

        private void NextButtonClicked(object sender, EventArgs e)
        {
            Navigation.PushAsync(new Next());
        }
    }
}
