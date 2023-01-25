/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import model.UserModel;

/**
 *
 * @author TutorialPedia.NET
 */
public class Login extends HttpServlet {


    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action= request.getParameter("action");
        if (action.equals("logout")) {
            HttpSession session = request.getSession();
            session.invalidate();
            response.sendRedirect("login.jsp");
        }

    }
@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String proses = request.getParameter("proses");

        if (proses.equals("login")) {
            String user = request.getParameter("username");
            String pass = request.getParameter("password");
            String email=request.getParameter("email");
            String id=request.getParameter("id");
            if (pass == null || pass.equals("")) {   //validasi apabila field belum diisi
                response.sendRedirect("login.jsp");
            } else {
                UserModel pm = new UserModel();
                List<UserModel> datalogin = new ArrayList<UserModel>();

                datalogin = pm.LoginUser(user, pass);
                if (datalogin.isEmpty()) { //validasi apabila username dan password salah
                    response.sendRedirect("gagal.jsp"); 
                } else {
                    HttpSession session = request.getSession(true);
                    session.setAttribute("email", datalogin.get(0).getEmail());
                    session.setAttribute("username", datalogin.get(0).getUsername());
                    session.setAttribute("id", datalogin.get(0).getId());

                    if (datalogin.get(0).getUsername().equals(user)) {
                        response.sendRedirect("admin.jsp");
                    } else {
                        response.sendRedirect("login.jsp");
                    }
                }
            }
        }

    }
}